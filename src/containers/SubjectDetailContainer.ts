import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  addChapterAction,
  listChapterAction
} from 'redux/actions/chapters/chapterActions'
import { getClassDetailAction } from 'redux/actions/classes/classActions'
import { getSubjectDetailAction } from 'redux/actions/subjects/subjectActions'
import { subjectSelectors } from 'selectors/subjectSelectors/subjectSelectors'
import { IAddChapterRequest } from 'interfaces/request/IAddChapterRequest'
import { IListRequest } from 'interfaces/request/IListRequest'
import SubjectDetail from 'views/pages/subjects/SubjectDetail'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSubject: (id: number) => dispatch(getSubjectDetailAction(id)),
  getClassDetail: (id: number) => dispatch(getClassDetailAction(id)),
  getListChapter: (request?: IListRequest) =>
    dispatch(listChapterAction(request)),
  addChapter: (request: IAddChapterRequest, callback: () => void) =>
    dispatch(addChapterAction(request, callback))
})

export default connect(subjectSelectors, mapDispatchToProps)(SubjectDetail)
