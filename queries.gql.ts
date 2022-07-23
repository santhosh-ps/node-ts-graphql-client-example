import gql from 'graphql-tag';

gql`query getProjects {
  project{
    id
    name
  }
}`

gql`query getProjectAndIssues($projectNameSearch: String!) {
  project(where:{name:{_ilike: $projectNameSearch}}){
    id
    name
    issues{
      id
      name
    }
  }
}`
