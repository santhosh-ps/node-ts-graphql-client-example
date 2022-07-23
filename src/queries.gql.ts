import gql from 'graphql-tag';

gql`query getProjects {
  projects{
    id
    name
  }
}`

gql`query getProjectAndIssues($projectNameSearch: String!) {
  projects(where:{name:{_ilike: $projectNameSearch}}){
    id
    name
    issues{
      id
      name
    }
  }
}`

gql`mutation createProjects($projects: [projects_insert_input!]!) {
  insert_projects(objects: $projects) {
    returning {
      id
      name
    }
  }
}`

gql`mutation multiMutationTest($projects: [projects_insert_input!]!) {
  insert_projects(objects: $projects) {
    returning {
      id
      name
    }
  }
  update_projects(where: {name: {_ilike: "%test%"}}, _set: {name: "name-test"}) {
    returning {
      id
      name
    }
  }
}
`