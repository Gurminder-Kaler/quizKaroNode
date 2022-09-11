import AdminRoute from '../common/AdminRoute'
import BackEndDashboard from '../backend/pages/BackEndDashboard'
import BackEndUserCrud from '../backend/pages/admin/user/BackEndUserCrud'
import BackEndProfessionCrud from '../backend/pages/admin/profession/BackEndProfessionCrud'
import BackEndUserCrudEdit from '../backend/pages/admin/user/BackEndUserCrudEdit'
import BackEndSmileyStickerCrud from '../backend/pages/admin/smileySticker/BackEndSmileyStickerCrud'
import BackEndGuidelineCrud from '../backend/pages/admin/guidelines/BackEndGuidelineCrud'
import BackEndContactUsCrud from '../backend/pages/admin/contactus/BackEndContactUsCrud'
import BackEndAboutUsCrud from '../backend/pages/admin/aboutus/BackEndAboutUsCrud'
import BackEndViewAllReportMessages from '../backend/pages/admin/helpAndSupport/BackEndViewAllReportMessages'
import BackEndViewAllReportTypes from '../backend/pages/admin/helpAndSupport/BackEndReportTypeCrud'
import BackEndViewAllCompanies from '../backend/pages/admin/company/BackEndViewAllCompanies'
import BackEndViewAllCompanyCategories from '../backend/pages/admin/company/category/BackEndViewAllCompanyCategories'
import BackEndAllGroups from '../backend/pages/admin/chat/BackEndAllGroups'
import BackEndSingleGroupChat from '../backend/pages/admin/chat/BackEndSingleGroupChat'
import BackEndQuizCrud from '../backend/pages/admin/quiz/BackEndQuizCrud'
import BackEndQuizCategoryCrud from '../backend/pages/admin/quiz/BackEndQuizCategoryCrud'
let array = [
  <AdminRoute exact path='/admin/dashboard' component={BackEndDashboard} />,
  <AdminRoute
    exact
    path='/admin/profession'
    component={BackEndProfessionCrud}
  />,
  <AdminRoute exact path='/admin/user' component={BackEndUserCrud} />,
  <AdminRoute
    exact
    path='/admin/user/edit/:id'
    component={BackEndUserCrudEdit}
  />,
  <AdminRoute
    exact
    path='/admin/smileySticker'
    component={BackEndSmileyStickerCrud}
  />,
  <AdminRoute
    exact
    path='/admin/guidelines'
    component={BackEndGuidelineCrud}
  />,
  <AdminRoute exact path='/admin/quiz' component={BackEndQuizCrud} />,
  <AdminRoute
    exact
    path='/admin/quizCategory'
    component={BackEndQuizCategoryCrud}
  />,
  <AdminRoute exact path='/admin/contactus' component={BackEndContactUsCrud} />,
  <AdminRoute exact path='/admin/aboutus' component={BackEndAboutUsCrud} />,
  <AdminRoute
    exact
    path='/admin/helpAndSupport/viewAllReportMessages'
    component={BackEndViewAllReportMessages}
  />,
  <AdminRoute
    exact
    path='/admin/helpAndSupport/viewAllReportTypes'
    component={BackEndViewAllReportTypes}
  />,
  <AdminRoute
    exact
    path='/admin/company/manage'
    component={BackEndViewAllCompanies}
  />,
  <AdminRoute
    exact
    path='/admin/company/category'
    component={BackEndViewAllCompanyCategories}
  />,
  <AdminRoute exact path='/admin/chat/groups' component={BackEndAllGroups} />,
  <AdminRoute
    exact
    path='/admin/chat/group/:groupId'
    component={BackEndSingleGroupChat}
  />
]

export default array
