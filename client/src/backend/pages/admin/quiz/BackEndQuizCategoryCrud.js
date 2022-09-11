import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import BackEndCategoryAdd from './BackEndCategoryAdd'
import BackEndLayout from '../../../layouts/BackEndLayout'
import {
  getAllQuizCategories,
  updateQuizCategory
} from '../../../../actions/quizActions'
import MaterialTable from 'material-table'
import { toast } from 'react-toastify'

class BackEndQuizCategoryCrud extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: '',
      errors: ''
    }
  }
  componentDidMount () {
    this.props.getAllCategories()
  }
  UNSAFE_componentWillReceiveProps (nextProps) {
    console.log(
      '🚀 ~ file: BackEndQuizCategoryCrud.js ~ line 21 ~ BackEndQuizCategoryCrud ~ UNSAFE_componentWillReceiveProps ~ nextProps',
      nextProps
    )
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }
  render () {
    console.log('props', this.props)
    const { categories } = this.props
    const columns = [
      {
        title: 'Category',
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
              this.props.updateCategory(payload, this.state)
            }
            setTimeout(resolve, 4000)
          })
        }
      }
    }
    const tableTitle = "Categorys' List"

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
              <BackEndCategoryAdd />
              <div className='row'>
                <div className='col-12'>
                  <div className='card'>
                    <div className='card-body'>
                      {categories.length > 0 && (
                        <MaterialTable
                          title={tableTitle}
                          data={categories}
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
BackEndQuizCategoryCrud.propTypes = {
  categories: PropTypes.object.isRequired,
  errors: PropTypes.string.isRequired
}
function mapStateToProps (state) {
  return {
    categories:
      state &&
      state.categories &&
      state.categories.data &&
      state.categories.data.data
        ? state.categories.data.data
        : {},
    errors: state.errors ? state.errors : {}
  }
}

export default connect(mapStateToProps, {
  getAllCategories,
  updateCategory
})(BackEndQuizCategoryCrud)
