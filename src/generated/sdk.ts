import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

export type Cart = {
  __typename?: 'Cart';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  website?: Maybe<Websites>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type Intents = {
  __typename?: 'Intents';
  confidence?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Item = {
  __typename?: 'Item';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SampleInput = {
  query: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  entities?: Maybe<Scalars['jsonb']>;
  intents?: Maybe<Array<Maybe<Intents>>>;
  text?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['jsonb']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "issues" */
export type Issues = {
  __typename?: 'issues';
  description: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  projectId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "issues" */
export type Issues_Aggregate = {
  __typename?: 'issues_aggregate';
  aggregate?: Maybe<Issues_Aggregate_Fields>;
  nodes: Array<Issues>;
};

/** aggregate fields of "issues" */
export type Issues_Aggregate_Fields = {
  __typename?: 'issues_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Issues_Max_Fields>;
  min?: Maybe<Issues_Min_Fields>;
};


/** aggregate fields of "issues" */
export type Issues_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Issues_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "issues" */
export type Issues_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Issues_Max_Order_By>;
  min?: InputMaybe<Issues_Min_Order_By>;
};

/** input type for inserting array relation for remote table "issues" */
export type Issues_Arr_Rel_Insert_Input = {
  data: Array<Issues_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Issues_On_Conflict>;
};

/** Boolean expression to filter rows from the table "issues". All fields are combined with a logical 'AND'. */
export type Issues_Bool_Exp = {
  _and?: InputMaybe<Array<Issues_Bool_Exp>>;
  _not?: InputMaybe<Issues_Bool_Exp>;
  _or?: InputMaybe<Array<Issues_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "issues" */
export enum Issues_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExperimentPkey = 'experiment_pkey'
}

/** input type for inserting data into table "issues" */
export type Issues_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Issues_Max_Fields = {
  __typename?: 'issues_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "issues" */
export type Issues_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Issues_Min_Fields = {
  __typename?: 'issues_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "issues" */
export type Issues_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "issues" */
export type Issues_Mutation_Response = {
  __typename?: 'issues_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Issues>;
};

/** on_conflict condition type for table "issues" */
export type Issues_On_Conflict = {
  constraint: Issues_Constraint;
  update_columns?: Array<Issues_Update_Column>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

/** Ordering options when selecting data from "issues". */
export type Issues_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: issues */
export type Issues_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "issues" */
export enum Issues_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'projectId'
}

/** input type for updating data in table "issues" */
export type Issues_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "issues" */
export enum Issues_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'projectId'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "issues" */
  delete_issues?: Maybe<Issues_Mutation_Response>;
  /** delete single row from the table: "issues" */
  delete_issues_by_pk?: Maybe<Issues>;
  /** delete data from the table: "permission" */
  delete_permission?: Maybe<Permission_Mutation_Response>;
  /** delete single row from the table: "permission" */
  delete_permission_by_pk?: Maybe<Permission>;
  /** delete data from the table: "project" */
  delete_project?: Maybe<Project_Mutation_Response>;
  /** delete single row from the table: "project" */
  delete_project_by_pk?: Maybe<Project>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** delete data from the table: "role_permissions" */
  delete_role_permissions?: Maybe<Role_Permissions_Mutation_Response>;
  /** delete single row from the table: "role_permissions" */
  delete_role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "websites" */
  delete_websites?: Maybe<Websites_Mutation_Response>;
  /** delete single row from the table: "websites" */
  delete_websites_by_pk?: Maybe<Websites>;
  /** insert data into the table: "issues" */
  insert_issues?: Maybe<Issues_Mutation_Response>;
  /** insert a single row into the table: "issues" */
  insert_issues_one?: Maybe<Issues>;
  /** insert data into the table: "permission" */
  insert_permission?: Maybe<Permission_Mutation_Response>;
  /** insert a single row into the table: "permission" */
  insert_permission_one?: Maybe<Permission>;
  /** insert data into the table: "project" */
  insert_project?: Maybe<Project_Mutation_Response>;
  /** insert a single row into the table: "project" */
  insert_project_one?: Maybe<Project>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** insert data into the table: "role_permissions" */
  insert_role_permissions?: Maybe<Role_Permissions_Mutation_Response>;
  /** insert a single row into the table: "role_permissions" */
  insert_role_permissions_one?: Maybe<Role_Permissions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "websites" */
  insert_websites?: Maybe<Websites_Mutation_Response>;
  /** insert a single row into the table: "websites" */
  insert_websites_one?: Maybe<Websites>;
  /** update data of the table: "issues" */
  update_issues?: Maybe<Issues_Mutation_Response>;
  /** update single row of the table: "issues" */
  update_issues_by_pk?: Maybe<Issues>;
  /** update data of the table: "permission" */
  update_permission?: Maybe<Permission_Mutation_Response>;
  /** update single row of the table: "permission" */
  update_permission_by_pk?: Maybe<Permission>;
  /** update data of the table: "project" */
  update_project?: Maybe<Project_Mutation_Response>;
  /** update single row of the table: "project" */
  update_project_by_pk?: Maybe<Project>;
  /** update data of the table: "role" */
  update_role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update data of the table: "role_permissions" */
  update_role_permissions?: Maybe<Role_Permissions_Mutation_Response>;
  /** update single row of the table: "role_permissions" */
  update_role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "websites" */
  update_websites?: Maybe<Websites_Mutation_Response>;
  /** update single row of the table: "websites" */
  update_websites_by_pk?: Maybe<Websites>;
};


/** mutation root */
export type Mutation_RootDelete_IssuesArgs = {
  where: Issues_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Issues_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PermissionArgs = {
  where: Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Permission_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectArgs = {
  where: Project_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Role_PermissionsArgs = {
  where: Role_Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_Permissions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_WebsitesArgs = {
  where: Websites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Websites_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_IssuesArgs = {
  objects: Array<Issues_Insert_Input>;
  on_conflict?: InputMaybe<Issues_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Issues_OneArgs = {
  object: Issues_Insert_Input;
  on_conflict?: InputMaybe<Issues_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PermissionArgs = {
  objects: Array<Permission_Insert_Input>;
  on_conflict?: InputMaybe<Permission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Permission_OneArgs = {
  object: Permission_Insert_Input;
  on_conflict?: InputMaybe<Permission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectArgs = {
  objects: Array<Project_Insert_Input>;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_OneArgs = {
  object: Project_Insert_Input;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_PermissionsArgs = {
  objects: Array<Role_Permissions_Insert_Input>;
  on_conflict?: InputMaybe<Role_Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_Permissions_OneArgs = {
  object: Role_Permissions_Insert_Input;
  on_conflict?: InputMaybe<Role_Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WebsitesArgs = {
  objects: Array<Websites_Insert_Input>;
  on_conflict?: InputMaybe<Websites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Websites_OneArgs = {
  object: Websites_Insert_Input;
  on_conflict?: InputMaybe<Websites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_IssuesArgs = {
  _set?: InputMaybe<Issues_Set_Input>;
  where: Issues_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Issues_By_PkArgs = {
  _set?: InputMaybe<Issues_Set_Input>;
  pk_columns: Issues_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PermissionArgs = {
  _inc?: InputMaybe<Permission_Inc_Input>;
  _set?: InputMaybe<Permission_Set_Input>;
  where: Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Permission_By_PkArgs = {
  _inc?: InputMaybe<Permission_Inc_Input>;
  _set?: InputMaybe<Permission_Set_Input>;
  pk_columns: Permission_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectArgs = {
  _inc?: InputMaybe<Project_Inc_Input>;
  _set?: InputMaybe<Project_Set_Input>;
  where: Project_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_By_PkArgs = {
  _inc?: InputMaybe<Project_Inc_Input>;
  _set?: InputMaybe<Project_Set_Input>;
  pk_columns: Project_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_PermissionsArgs = {
  _set?: InputMaybe<Role_Permissions_Set_Input>;
  where: Role_Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_Permissions_By_PkArgs = {
  _set?: InputMaybe<Role_Permissions_Set_Input>;
  pk_columns: Role_Permissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WebsitesArgs = {
  _append?: InputMaybe<Websites_Append_Input>;
  _delete_at_path?: InputMaybe<Websites_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Websites_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Websites_Delete_Key_Input>;
  _inc?: InputMaybe<Websites_Inc_Input>;
  _prepend?: InputMaybe<Websites_Prepend_Input>;
  _set?: InputMaybe<Websites_Set_Input>;
  where: Websites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Websites_By_PkArgs = {
  _append?: InputMaybe<Websites_Append_Input>;
  _delete_at_path?: InputMaybe<Websites_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Websites_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Websites_Delete_Key_Input>;
  _inc?: InputMaybe<Websites_Inc_Input>;
  _prepend?: InputMaybe<Websites_Prepend_Input>;
  _set?: InputMaybe<Websites_Set_Input>;
  pk_columns: Websites_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "permission" */
export type Permission = {
  __typename?: 'permission';
  cost?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
};

/** aggregated selection of "permission" */
export type Permission_Aggregate = {
  __typename?: 'permission_aggregate';
  aggregate?: Maybe<Permission_Aggregate_Fields>;
  nodes: Array<Permission>;
};

/** aggregate fields of "permission" */
export type Permission_Aggregate_Fields = {
  __typename?: 'permission_aggregate_fields';
  avg?: Maybe<Permission_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Permission_Max_Fields>;
  min?: Maybe<Permission_Min_Fields>;
  stddev?: Maybe<Permission_Stddev_Fields>;
  stddev_pop?: Maybe<Permission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Permission_Stddev_Samp_Fields>;
  sum?: Maybe<Permission_Sum_Fields>;
  var_pop?: Maybe<Permission_Var_Pop_Fields>;
  var_samp?: Maybe<Permission_Var_Samp_Fields>;
  variance?: Maybe<Permission_Variance_Fields>;
};


/** aggregate fields of "permission" */
export type Permission_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Permission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Permission_Avg_Fields = {
  __typename?: 'permission_avg_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "permission". All fields are combined with a logical 'AND'. */
export type Permission_Bool_Exp = {
  _and?: InputMaybe<Array<Permission_Bool_Exp>>;
  _not?: InputMaybe<Permission_Bool_Exp>;
  _or?: InputMaybe<Array<Permission_Bool_Exp>>;
  cost?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "permission" */
export enum Permission_Constraint {
  /** unique or primary key constraint on columns "id" */
  PermissionPkey = 'permission_pkey'
}

/** input type for incrementing numeric columns in table "permission" */
export type Permission_Inc_Input = {
  cost?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "permission" */
export type Permission_Insert_Input = {
  cost?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Permission_Max_Fields = {
  __typename?: 'permission_max_fields';
  cost?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Permission_Min_Fields = {
  __typename?: 'permission_min_fields';
  cost?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "permission" */
export type Permission_Mutation_Response = {
  __typename?: 'permission_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Permission>;
};

/** input type for inserting object relation for remote table "permission" */
export type Permission_Obj_Rel_Insert_Input = {
  data: Permission_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Permission_On_Conflict>;
};

/** on_conflict condition type for table "permission" */
export type Permission_On_Conflict = {
  constraint: Permission_Constraint;
  update_columns?: Array<Permission_Update_Column>;
  where?: InputMaybe<Permission_Bool_Exp>;
};

/** Ordering options when selecting data from "permission". */
export type Permission_Order_By = {
  cost?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: permission */
export type Permission_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "permission" */
export enum Permission_Select_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "permission" */
export type Permission_Set_Input = {
  cost?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Permission_Stddev_Fields = {
  __typename?: 'permission_stddev_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Permission_Stddev_Pop_Fields = {
  __typename?: 'permission_stddev_pop_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Permission_Stddev_Samp_Fields = {
  __typename?: 'permission_stddev_samp_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Permission_Sum_Fields = {
  __typename?: 'permission_sum_fields';
  cost?: Maybe<Scalars['Int']>;
};

/** update columns of table "permission" */
export enum Permission_Update_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status'
}

/** aggregate var_pop on columns */
export type Permission_Var_Pop_Fields = {
  __typename?: 'permission_var_pop_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Permission_Var_Samp_Fields = {
  __typename?: 'permission_var_samp_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Permission_Variance_Fields = {
  __typename?: 'permission_variance_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "project" */
export type Project = {
  __typename?: 'project';
  cost?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  issues: Array<Issues>;
  /** An aggregate relationship */
  issues_aggregate: Issues_Aggregate;
  name: Scalars['String'];
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "project" */
export type ProjectIssuesArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};


/** columns and relationships of "project" */
export type ProjectIssues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};

/** aggregated selection of "project" */
export type Project_Aggregate = {
  __typename?: 'project_aggregate';
  aggregate?: Maybe<Project_Aggregate_Fields>;
  nodes: Array<Project>;
};

/** aggregate fields of "project" */
export type Project_Aggregate_Fields = {
  __typename?: 'project_aggregate_fields';
  avg?: Maybe<Project_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Project_Max_Fields>;
  min?: Maybe<Project_Min_Fields>;
  stddev?: Maybe<Project_Stddev_Fields>;
  stddev_pop?: Maybe<Project_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Project_Stddev_Samp_Fields>;
  sum?: Maybe<Project_Sum_Fields>;
  var_pop?: Maybe<Project_Var_Pop_Fields>;
  var_samp?: Maybe<Project_Var_Samp_Fields>;
  variance?: Maybe<Project_Variance_Fields>;
};


/** aggregate fields of "project" */
export type Project_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Project_Avg_Fields = {
  __typename?: 'project_avg_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "project". All fields are combined with a logical 'AND'. */
export type Project_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Bool_Exp>>;
  _not?: InputMaybe<Project_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Bool_Exp>>;
  cost?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  issues?: InputMaybe<Issues_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "project" */
export enum Project_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProjectPkey = 'project_pkey'
}

/** input type for incrementing numeric columns in table "project" */
export type Project_Inc_Input = {
  cost?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "project" */
export type Project_Insert_Input = {
  cost?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  issues?: InputMaybe<Issues_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Project_Max_Fields = {
  __typename?: 'project_max_fields';
  cost?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Project_Min_Fields = {
  __typename?: 'project_min_fields';
  cost?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "project" */
export type Project_Mutation_Response = {
  __typename?: 'project_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project>;
};

/** on_conflict condition type for table "project" */
export type Project_On_Conflict = {
  constraint: Project_Constraint;
  update_columns?: Array<Project_Update_Column>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** Ordering options when selecting data from "project". */
export type Project_Order_By = {
  cost?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  issues_aggregate?: InputMaybe<Issues_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: project */
export type Project_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "project" */
export enum Project_Select_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "project" */
export type Project_Set_Input = {
  cost?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Project_Stddev_Fields = {
  __typename?: 'project_stddev_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Project_Stddev_Pop_Fields = {
  __typename?: 'project_stddev_pop_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Project_Stddev_Samp_Fields = {
  __typename?: 'project_stddev_samp_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Project_Sum_Fields = {
  __typename?: 'project_sum_fields';
  cost?: Maybe<Scalars['Int']>;
};

/** update columns of table "project" */
export enum Project_Update_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Project_Var_Pop_Fields = {
  __typename?: 'project_var_pop_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Project_Var_Samp_Fields = {
  __typename?: 'project_var_samp_fields';
  cost?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Project_Variance_Fields = {
  __typename?: 'project_variance_fields';
  cost?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  cart?: Maybe<Cart>;
  /** An array relationship */
  issues: Array<Issues>;
  /** An aggregate relationship */
  issues_aggregate: Issues_Aggregate;
  /** fetch data from the table: "issues" using primary key columns */
  issues_by_pk?: Maybe<Issues>;
  item?: Maybe<Item>;
  /** fetch data from the table: "permission" */
  permission: Array<Permission>;
  /** fetch aggregated fields from the table: "permission" */
  permission_aggregate: Permission_Aggregate;
  /** fetch data from the table: "permission" using primary key columns */
  permission_by_pk?: Maybe<Permission>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: Project_Aggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  queryNLP?: Maybe<SampleOutput>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "role_permissions" */
  role_permissions: Array<Role_Permissions>;
  /** fetch aggregated fields from the table: "role_permissions" */
  role_permissions_aggregate: Role_Permissions_Aggregate;
  /** fetch data from the table: "role_permissions" using primary key columns */
  role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "websites" */
  websites: Array<Websites>;
  /** fetch aggregated fields from the table: "websites" */
  websites_aggregate: Websites_Aggregate;
  /** fetch data from the table: "websites" using primary key columns */
  websites_by_pk?: Maybe<Websites>;
};


export type Query_RootCartArgs = {
  arg1: Scalars['String'];
};


export type Query_RootIssuesArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};


export type Query_RootIssues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};


export type Query_RootIssues_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootItemArgs = {
  arg1: SampleInput;
};


export type Query_RootPermissionArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


export type Query_RootPermission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


export type Query_RootPermission_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Query_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Query_RootProject_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootQueryNlpArgs = {
  arg1: SampleInput;
};


export type Query_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRole_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


export type Query_RootRole_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


export type Query_RootRole_Permissions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWebsitesArgs = {
  distinct_on?: InputMaybe<Array<Websites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Websites_Order_By>>;
  where?: InputMaybe<Websites_Bool_Exp>;
};


export type Query_RootWebsites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Websites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Websites_Order_By>>;
  where?: InputMaybe<Websites_Bool_Exp>;
};


export type Query_RootWebsites_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "role" */
export type Role = {
  __typename?: 'role';
  id: Scalars['uuid'];
  name: Scalars['String'];
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: 'role_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
};


/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Bool_Exp>>;
  _not?: InputMaybe<Role_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "role" */
export enum Role_Constraint {
  /** unique or primary key constraint on columns "id" */
  RolePkey = 'role_pkey'
}

/** input type for inserting data into table "role" */
export type Role_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'role_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'role_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "role" */
export type Role_Mutation_Response = {
  __typename?: 'role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** input type for inserting object relation for remote table "role" */
export type Role_Obj_Rel_Insert_Input = {
  data: Role_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** on_conflict condition type for table "role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "role". */
export type Role_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** columns and relationships of "role_permissions" */
export type Role_Permissions = {
  __typename?: 'role_permissions';
  id: Scalars['uuid'];
  /** An object relationship */
  permission: Permission;
  permission_id: Scalars['uuid'];
  /** An object relationship */
  role: Role;
  role_id: Scalars['uuid'];
};

/** aggregated selection of "role_permissions" */
export type Role_Permissions_Aggregate = {
  __typename?: 'role_permissions_aggregate';
  aggregate?: Maybe<Role_Permissions_Aggregate_Fields>;
  nodes: Array<Role_Permissions>;
};

/** aggregate fields of "role_permissions" */
export type Role_Permissions_Aggregate_Fields = {
  __typename?: 'role_permissions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Role_Permissions_Max_Fields>;
  min?: Maybe<Role_Permissions_Min_Fields>;
};


/** aggregate fields of "role_permissions" */
export type Role_Permissions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "role_permissions". All fields are combined with a logical 'AND'. */
export type Role_Permissions_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Permissions_Bool_Exp>>;
  _not?: InputMaybe<Role_Permissions_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Permissions_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  permission?: InputMaybe<Permission_Bool_Exp>;
  permission_id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<Role_Bool_Exp>;
  role_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "role_permissions" */
export enum Role_Permissions_Constraint {
  /** unique or primary key constraint on columns "id" */
  RolePermissionsPkey = 'role_permissions_pkey'
}

/** input type for inserting data into table "role_permissions" */
export type Role_Permissions_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  permission?: InputMaybe<Permission_Obj_Rel_Insert_Input>;
  permission_id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Role_Obj_Rel_Insert_Input>;
  role_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Role_Permissions_Max_Fields = {
  __typename?: 'role_permissions_max_fields';
  id?: Maybe<Scalars['uuid']>;
  permission_id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Role_Permissions_Min_Fields = {
  __typename?: 'role_permissions_min_fields';
  id?: Maybe<Scalars['uuid']>;
  permission_id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "role_permissions" */
export type Role_Permissions_Mutation_Response = {
  __typename?: 'role_permissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Role_Permissions>;
};

/** on_conflict condition type for table "role_permissions" */
export type Role_Permissions_On_Conflict = {
  constraint: Role_Permissions_Constraint;
  update_columns?: Array<Role_Permissions_Update_Column>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};

/** Ordering options when selecting data from "role_permissions". */
export type Role_Permissions_Order_By = {
  id?: InputMaybe<Order_By>;
  permission?: InputMaybe<Permission_Order_By>;
  permission_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Role_Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: role_permissions */
export type Role_Permissions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "role_permissions" */
export enum Role_Permissions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PermissionId = 'permission_id',
  /** column name */
  RoleId = 'role_id'
}

/** input type for updating data in table "role_permissions" */
export type Role_Permissions_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  permission_id?: InputMaybe<Scalars['uuid']>;
  role_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "role_permissions" */
export enum Role_Permissions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PermissionId = 'permission_id',
  /** column name */
  RoleId = 'role_id'
}

/** primary key columns input for table: role */
export type Role_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "role" */
export type Role_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "role" */
export enum Role_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  issues: Array<Issues>;
  /** An aggregate relationship */
  issues_aggregate: Issues_Aggregate;
  /** fetch data from the table: "issues" using primary key columns */
  issues_by_pk?: Maybe<Issues>;
  /** fetch data from the table: "permission" */
  permission: Array<Permission>;
  /** fetch aggregated fields from the table: "permission" */
  permission_aggregate: Permission_Aggregate;
  /** fetch data from the table: "permission" using primary key columns */
  permission_by_pk?: Maybe<Permission>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: Project_Aggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "role_permissions" */
  role_permissions: Array<Role_Permissions>;
  /** fetch aggregated fields from the table: "role_permissions" */
  role_permissions_aggregate: Role_Permissions_Aggregate;
  /** fetch data from the table: "role_permissions" using primary key columns */
  role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "websites" */
  websites: Array<Websites>;
  /** fetch aggregated fields from the table: "websites" */
  websites_aggregate: Websites_Aggregate;
  /** fetch data from the table: "websites" using primary key columns */
  websites_by_pk?: Maybe<Websites>;
};


export type Subscription_RootIssuesArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};


export type Subscription_RootIssues_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Issues_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Issues_Order_By>>;
  where?: InputMaybe<Issues_Bool_Exp>;
};


export type Subscription_RootIssues_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPermissionArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


export type Subscription_RootPermission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


export type Subscription_RootPermission_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Subscription_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Subscription_RootProject_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRole_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


export type Subscription_RootRole_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


export type Subscription_RootRole_Permissions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWebsitesArgs = {
  distinct_on?: InputMaybe<Array<Websites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Websites_Order_By>>;
  where?: InputMaybe<Websites_Bool_Exp>;
};


export type Subscription_RootWebsites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Websites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Websites_Order_By>>;
  where?: InputMaybe<Websites_Bool_Exp>;
};


export type Subscription_RootWebsites_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** User details */
export type Users = {
  __typename?: 'users';
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  last_name: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "websites" */
export type Websites = {
  __typename?: 'websites';
  content?: Maybe<Scalars['jsonb']>;
  id: Scalars['Int'];
  site_name?: Maybe<Scalars['String']>;
  styles?: Maybe<Scalars['jsonb']>;
};


/** columns and relationships of "websites" */
export type WebsitesContentArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "websites" */
export type WebsitesStylesArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "websites" */
export type Websites_Aggregate = {
  __typename?: 'websites_aggregate';
  aggregate?: Maybe<Websites_Aggregate_Fields>;
  nodes: Array<Websites>;
};

/** aggregate fields of "websites" */
export type Websites_Aggregate_Fields = {
  __typename?: 'websites_aggregate_fields';
  avg?: Maybe<Websites_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Websites_Max_Fields>;
  min?: Maybe<Websites_Min_Fields>;
  stddev?: Maybe<Websites_Stddev_Fields>;
  stddev_pop?: Maybe<Websites_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Websites_Stddev_Samp_Fields>;
  sum?: Maybe<Websites_Sum_Fields>;
  var_pop?: Maybe<Websites_Var_Pop_Fields>;
  var_samp?: Maybe<Websites_Var_Samp_Fields>;
  variance?: Maybe<Websites_Variance_Fields>;
};


/** aggregate fields of "websites" */
export type Websites_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Websites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Websites_Append_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
  styles?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Websites_Avg_Fields = {
  __typename?: 'websites_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "websites". All fields are combined with a logical 'AND'. */
export type Websites_Bool_Exp = {
  _and?: InputMaybe<Array<Websites_Bool_Exp>>;
  _not?: InputMaybe<Websites_Bool_Exp>;
  _or?: InputMaybe<Array<Websites_Bool_Exp>>;
  content?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  site_name?: InputMaybe<String_Comparison_Exp>;
  styles?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "websites" */
export enum Websites_Constraint {
  /** unique or primary key constraint on columns "id" */
  WebsitesPkey = 'websites_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Websites_Delete_At_Path_Input = {
  content?: InputMaybe<Array<Scalars['String']>>;
  styles?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Websites_Delete_Elem_Input = {
  content?: InputMaybe<Scalars['Int']>;
  styles?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Websites_Delete_Key_Input = {
  content?: InputMaybe<Scalars['String']>;
  styles?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "websites" */
export type Websites_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "websites" */
export type Websites_Insert_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  site_name?: InputMaybe<Scalars['String']>;
  styles?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Websites_Max_Fields = {
  __typename?: 'websites_max_fields';
  id?: Maybe<Scalars['Int']>;
  site_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Websites_Min_Fields = {
  __typename?: 'websites_min_fields';
  id?: Maybe<Scalars['Int']>;
  site_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "websites" */
export type Websites_Mutation_Response = {
  __typename?: 'websites_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Websites>;
};

/** on_conflict condition type for table "websites" */
export type Websites_On_Conflict = {
  constraint: Websites_Constraint;
  update_columns?: Array<Websites_Update_Column>;
  where?: InputMaybe<Websites_Bool_Exp>;
};

/** Ordering options when selecting data from "websites". */
export type Websites_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  site_name?: InputMaybe<Order_By>;
  styles?: InputMaybe<Order_By>;
};

/** primary key columns input for table: websites */
export type Websites_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Websites_Prepend_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
  styles?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "websites" */
export enum Websites_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  SiteName = 'site_name',
  /** column name */
  Styles = 'styles'
}

/** input type for updating data in table "websites" */
export type Websites_Set_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  site_name?: InputMaybe<Scalars['String']>;
  styles?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Websites_Stddev_Fields = {
  __typename?: 'websites_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Websites_Stddev_Pop_Fields = {
  __typename?: 'websites_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Websites_Stddev_Samp_Fields = {
  __typename?: 'websites_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Websites_Sum_Fields = {
  __typename?: 'websites_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "websites" */
export enum Websites_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  SiteName = 'site_name',
  /** column name */
  Styles = 'styles'
}

/** aggregate var_pop on columns */
export type Websites_Var_Pop_Fields = {
  __typename?: 'websites_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Websites_Var_Samp_Fields = {
  __typename?: 'websites_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Websites_Variance_Fields = {
  __typename?: 'websites_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = { __typename?: 'query_root', project: Array<{ __typename?: 'project', id: any, name: string }> };

export type GetProjectAndIssuesQueryVariables = Exact<{
  projectNameSearch: Scalars['String'];
}>;


export type GetProjectAndIssuesQuery = { __typename?: 'query_root', project: Array<{ __typename?: 'project', id: any, name: string, issues: Array<{ __typename?: 'issues', id: any, name: string }> }> };


export const GetProjectsDocument = gql`
    query getProjects {
  project {
    id
    name
  }
}
    `;
export const GetProjectAndIssuesDocument = gql`
    query getProjectAndIssues($projectNameSearch: String!) {
  project(where: {name: {_ilike: $projectNameSearch}}) {
    id
    name
    issues {
      id
      name
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getProjects(variables?: GetProjectsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProjectsQuery>(GetProjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProjects', 'query');
    },
    getProjectAndIssues(variables: GetProjectAndIssuesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProjectAndIssuesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProjectAndIssuesQuery>(GetProjectAndIssuesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProjectAndIssues', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;