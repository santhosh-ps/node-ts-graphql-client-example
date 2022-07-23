import gql from 'graphql-tag';

gql`query getProjects {
  projects{
    id
    name
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
