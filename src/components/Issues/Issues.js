import React from 'react'
import PropTypes from 'prop-types'
import IssueAssignee from '../IssueAssignee/IssueAssignee'
import Pagination from '../Pagination/Pagination'

function Issues({ issues, error, pagination, onPageChange }) {
  return (
    <div>
      {error &&
      <div className="alert alert-warning">
        {error}
      </div>}

      {(!issues || issues.length === 0) &&
      <div className="alert alert-warning">
        No issues found
      </div>}

      {!error && Array.isArray(issues) &&
      <div>
        {issues.length > 0 &&
        <div>
          <table className="table">
            <thead>
            <tr>
              <th>Title</th>
              <th>Assignees</th>
            </tr>
            </thead>
            <tbody>
            {issues.map(issue => (
              <tr key={issue.id}>
                <td>
                  <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                    {issue.title}
                  </a>
                </td>
                <td>
                  {issue.assignees.length > 0 && issue.assignees.map(assignee => (
                      <div key={assignee.id} className="d-inline mr-3">
                        <IssueAssignee {...assignee}/>
                      </div>
                    ),
                  )}
                  {issue.assignees.length === 0 && issue.assignee &&
                  <IssueAssignee {...issue.assignee}/>}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          {pagination &&
          <Pagination {...pagination} onPageChange={onPageChange}/>}
        </div>}
      </div>}
    </div>
  )
}

Issues.propTypes = {
  error: PropTypes.string,
  issues: PropTypes.array,
  onPageChange: PropTypes.func,
  pagination: PropTypes.object,
}

export default Issues
