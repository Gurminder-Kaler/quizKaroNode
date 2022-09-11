import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import BackEndProfessionAdd from './BackEndProfessionAdd'
import BackEndLayout from '../../../layouts/BackEndLayout'
import {
  getAllProfessions,
  updateProfession
} from '../../../../actions/profileActions'
import MaterialTable from 'material-table'
import { toast } from 'react-toastify'

class BackEndProfessionCrud extends Component {
  constructor (props) {
    super(props)
    this.state = {
      professions: '',
      errors: ''
    }
  }
  componentDidMount () {
    this.props.getAllProfessions()
  }
  UNSAFE_componentWillReceiveProps (nextProps) {
    console.log(
      '🚀 ~ file: BackEndProfessionCrud.js ~ line 21 ~ BackEndProfessionCrud ~ UNSAFE_componentWillReceiveProps ~ nextProps',
      nextProps
    )
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }
  render () {
    console.log('props', this.props)
    const { professions } = this.props
    const columns = [
      {
        title: 'Profession',
        field: 'name'
      }
    ]
    const options = {
      search: true,
      paging: true
    }
    const editableOptions = {
      cellStyle: {},
      onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
        if (newValue === '') {
          toast.warning('Value cannot be empty')
        } else {
          return new Promise((resolve, reject) => {
            if (oldValue !== newValue) {
              console.log('newValue: ' + newValue + 'row data : ', rowData)
              const payload = {
                id: rowData.id,
                profession: newValue
              }
              this.props.updateProfession(payload, this.state)
            }
            setTimeout(resolve, 4000)
          })
        }
      }
    }
    const tableTitle = "Professions' List"

    return (
      <BackEndLayout>
        <div className='content-wrapper'>
          <div className='content-header'>
            <div className='container-fluid'>
              <div className='row mb-2'>
                <div className='col-sm-6'>
                  <h1 className='m-0 text-dark'>Dashboard</h1>
                </div>
                <div className='col-sm-6'>
                  <ol className='breadcrumb float-sm-right'>
                    <li className='breadcrumb-item'>
                      <a>Home</a>
                    </li>
                    <li className='breadcrumb-item active'>Dashboard v1</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <section className='content'>
            <div className='container-fluid'>
              <BackEndProfessionAdd />
              <div className='row'>
                <div className='col-12'>
                  <div className='card'>
                    <div className='card-body'>
                      {professions.length > 0 && (
                        <MaterialTable
                          title={tableTitle}
                          data={professions}
                          columns={columns}
                          options={options}
                          cellEditable={editableOptions}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </BackEndLayout>
    )
  }
}
BackEndProfessionCrud.propTypes = {
  professions: PropTypes.object.isRequired,
  errors: PropTypes.string.isRequired
}
function mapStateToProps (state) {
  return {
    professions:
      state.profile &&
      state.profile.professions &&
      state.profile.professions.data &&
      state.profile.professions.data.data
        ? state.profile.professions.data.data
        : {},
    errors: state.errors ? state.errors : {}
  }
}

export default connect(mapStateToProps, {
  getAllProfessions,
  updateProfession
})(BackEndProfessionCrud)
