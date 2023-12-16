import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  numeric: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

export type AdminLoginInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AdminLoginOutput = {
  __typename?: 'AdminLoginOutput';
  accessToken: Scalars['String']['output'];
};

export type AdminRegisterInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AdminRegisterOutput = {
  __typename?: 'AdminRegisterOutput';
  accessToken: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "admin" */
export type Admin = {
  __typename?: 'admin';
  id: Scalars['uuid']['output'];
  password: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

/** aggregated selection of "admin" */
export type Admin_Aggregate = {
  __typename?: 'admin_aggregate';
  aggregate?: Maybe<Admin_Aggregate_Fields>;
  nodes: Array<Admin>;
};

/** aggregate fields of "admin" */
export type Admin_Aggregate_Fields = {
  __typename?: 'admin_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Admin_Max_Fields>;
  min?: Maybe<Admin_Min_Fields>;
};


/** aggregate fields of "admin" */
export type Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "admin". All fields are combined with a logical 'AND'. */
export type Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Admin_Bool_Exp>>;
  _not?: InputMaybe<Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "admin" */
export enum Admin_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdminPkey = 'admin_pkey',
  /** unique or primary key constraint on columns "username" */
  AdminUsernameKey = 'admin_username_key'
}

/** input type for inserting data into table "admin" */
export type Admin_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Admin_Max_Fields = {
  __typename?: 'admin_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Admin_Min_Fields = {
  __typename?: 'admin_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "admin" */
export type Admin_Mutation_Response = {
  __typename?: 'admin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin>;
};

/** on_conflict condition type for table "admin" */
export type Admin_On_Conflict = {
  constraint: Admin_Constraint;
  update_columns?: Array<Admin_Update_Column>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** Ordering options when selecting data from "admin". */
export type Admin_Order_By = {
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: admin */
export type Admin_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "admin" */
export enum Admin_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "admin" */
export type Admin_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "admin" */
export type Admin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Admin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Admin_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "admin" */
export enum Admin_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

export type Admin_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Admin_Set_Input>;
  /** filter the rows which have to be updated */
  where: Admin_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "menu" */
export type Menu = {
  __typename?: 'menu';
  id: Scalars['uuid']['output'];
  image: Scalars['String']['output'];
  ingredients: Scalars['String']['output'];
  price: Scalars['numeric']['output'];
  title: Scalars['String']['output'];
  weight: Scalars['numeric']['output'];
};

/** aggregated selection of "menu" */
export type Menu_Aggregate = {
  __typename?: 'menu_aggregate';
  aggregate?: Maybe<Menu_Aggregate_Fields>;
  nodes: Array<Menu>;
};

/** aggregate fields of "menu" */
export type Menu_Aggregate_Fields = {
  __typename?: 'menu_aggregate_fields';
  avg?: Maybe<Menu_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Menu_Max_Fields>;
  min?: Maybe<Menu_Min_Fields>;
  stddev?: Maybe<Menu_Stddev_Fields>;
  stddev_pop?: Maybe<Menu_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Menu_Stddev_Samp_Fields>;
  sum?: Maybe<Menu_Sum_Fields>;
  var_pop?: Maybe<Menu_Var_Pop_Fields>;
  var_samp?: Maybe<Menu_Var_Samp_Fields>;
  variance?: Maybe<Menu_Variance_Fields>;
};


/** aggregate fields of "menu" */
export type Menu_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Menu_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Menu_Avg_Fields = {
  __typename?: 'menu_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "menu". All fields are combined with a logical 'AND'. */
export type Menu_Bool_Exp = {
  _and?: InputMaybe<Array<Menu_Bool_Exp>>;
  _not?: InputMaybe<Menu_Bool_Exp>;
  _or?: InputMaybe<Array<Menu_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  ingredients?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "menu" */
export enum Menu_Constraint {
  /** unique or primary key constraint on columns "id" */
  MenuPkey = 'menu_pkey'
}

/** input type for incrementing numeric columns in table "menu" */
export type Menu_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "menu" */
export type Menu_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Menu_Max_Fields = {
  __typename?: 'menu_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  ingredients?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Menu_Min_Fields = {
  __typename?: 'menu_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  ingredients?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** response of any mutation on the table "menu" */
export type Menu_Mutation_Response = {
  __typename?: 'menu_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Menu>;
};

/** on_conflict condition type for table "menu" */
export type Menu_On_Conflict = {
  constraint: Menu_Constraint;
  update_columns?: Array<Menu_Update_Column>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** Ordering options when selecting data from "menu". */
export type Menu_Order_By = {
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: menu */
export type Menu_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "menu" */
export enum Menu_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  Price = 'price',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "menu" */
export type Menu_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Menu_Stddev_Fields = {
  __typename?: 'menu_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Menu_Stddev_Pop_Fields = {
  __typename?: 'menu_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Menu_Stddev_Samp_Fields = {
  __typename?: 'menu_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "menu" */
export type Menu_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Menu_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Menu_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Menu_Sum_Fields = {
  __typename?: 'menu_sum_fields';
  price?: Maybe<Scalars['numeric']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "menu" */
export enum Menu_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  Price = 'price',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

export type Menu_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Menu_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Menu_Set_Input>;
  /** filter the rows which have to be updated */
  where: Menu_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Menu_Var_Pop_Fields = {
  __typename?: 'menu_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Menu_Var_Samp_Fields = {
  __typename?: 'menu_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Menu_Variance_Fields = {
  __typename?: 'menu_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** Admin registration */
  adminRegister?: Maybe<AdminRegisterOutput>;
  /** delete data from the table: "admin" */
  delete_admin?: Maybe<Admin_Mutation_Response>;
  /** delete single row from the table: "admin" */
  delete_admin_by_pk?: Maybe<Admin>;
  /** delete data from the table: "menu" */
  delete_menu?: Maybe<Menu_Mutation_Response>;
  /** delete single row from the table: "menu" */
  delete_menu_by_pk?: Maybe<Menu>;
  /** insert data into the table: "admin" */
  insert_admin?: Maybe<Admin_Mutation_Response>;
  /** insert a single row into the table: "admin" */
  insert_admin_one?: Maybe<Admin>;
  /** insert data into the table: "menu" */
  insert_menu?: Maybe<Menu_Mutation_Response>;
  /** insert a single row into the table: "menu" */
  insert_menu_one?: Maybe<Menu>;
  /** update data of the table: "admin" */
  update_admin?: Maybe<Admin_Mutation_Response>;
  /** update single row of the table: "admin" */
  update_admin_by_pk?: Maybe<Admin>;
  /** update multiples rows of table: "admin" */
  update_admin_many?: Maybe<Array<Maybe<Admin_Mutation_Response>>>;
  /** update data of the table: "menu" */
  update_menu?: Maybe<Menu_Mutation_Response>;
  /** update single row of the table: "menu" */
  update_menu_by_pk?: Maybe<Menu>;
  /** update multiples rows of table: "menu" */
  update_menu_many?: Maybe<Array<Maybe<Menu_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootAdminRegisterArgs = {
  admin: AdminRegisterInput;
};


/** mutation root */
export type Mutation_RootDelete_AdminArgs = {
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Admin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MenuArgs = {
  where: Menu_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Menu_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AdminArgs = {
  objects: Array<Admin_Insert_Input>;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Admin_OneArgs = {
  object: Admin_Insert_Input;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MenuArgs = {
  objects: Array<Menu_Insert_Input>;
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Menu_OneArgs = {
  object: Menu_Insert_Input;
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AdminArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_By_PkArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  pk_columns: Admin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_ManyArgs = {
  updates: Array<Admin_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MenuArgs = {
  _inc?: InputMaybe<Menu_Inc_Input>;
  _set?: InputMaybe<Menu_Set_Input>;
  where: Menu_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Menu_By_PkArgs = {
  _inc?: InputMaybe<Menu_Inc_Input>;
  _set?: InputMaybe<Menu_Set_Input>;
  pk_columns: Menu_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Menu_ManyArgs = {
  updates: Array<Menu_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
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

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** Admin login */
  adminLogin?: Maybe<AdminLoginOutput>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table: "menu" */
  menu: Array<Menu>;
  /** fetch aggregated fields from the table: "menu" */
  menu_aggregate: Menu_Aggregate;
  /** fetch data from the table: "menu" using primary key columns */
  menu_by_pk?: Maybe<Menu>;
};


export type Query_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdminLoginArgs = {
  arg1: AdminLoginInput;
};


export type Query_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdmin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMenuArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


export type Query_RootMenu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


export type Query_RootMenu_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table in a streaming manner: "admin" */
  admin_stream: Array<Admin>;
  /** fetch data from the table: "menu" */
  menu: Array<Menu>;
  /** fetch aggregated fields from the table: "menu" */
  menu_aggregate: Menu_Aggregate;
  /** fetch data from the table: "menu" using primary key columns */
  menu_by_pk?: Maybe<Menu>;
  /** fetch data from the table in a streaming manner: "menu" */
  menu_stream: Array<Menu>;
};


export type Subscription_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAdmin_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Admin_Stream_Cursor_Input>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootMenuArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


export type Subscription_RootMenu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


export type Subscription_RootMenu_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMenu_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Menu_Stream_Cursor_Input>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AdminLoginInput: AdminLoginInput;
  AdminLoginOutput: ResolverTypeWrapper<AdminLoginOutput>;
  AdminRegisterInput: AdminRegisterInput;
  AdminRegisterOutput: ResolverTypeWrapper<AdminRegisterOutput>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  String_comparison_exp: String_Comparison_Exp;
  admin: ResolverTypeWrapper<Admin>;
  admin_aggregate: ResolverTypeWrapper<Admin_Aggregate>;
  admin_aggregate_fields: ResolverTypeWrapper<Admin_Aggregate_Fields>;
  admin_bool_exp: Admin_Bool_Exp;
  admin_constraint: Admin_Constraint;
  admin_insert_input: Admin_Insert_Input;
  admin_max_fields: ResolverTypeWrapper<Admin_Max_Fields>;
  admin_min_fields: ResolverTypeWrapper<Admin_Min_Fields>;
  admin_mutation_response: ResolverTypeWrapper<Admin_Mutation_Response>;
  admin_on_conflict: Admin_On_Conflict;
  admin_order_by: Admin_Order_By;
  admin_pk_columns_input: Admin_Pk_Columns_Input;
  admin_select_column: Admin_Select_Column;
  admin_set_input: Admin_Set_Input;
  admin_stream_cursor_input: Admin_Stream_Cursor_Input;
  admin_stream_cursor_value_input: Admin_Stream_Cursor_Value_Input;
  admin_update_column: Admin_Update_Column;
  admin_updates: Admin_Updates;
  cursor_ordering: Cursor_Ordering;
  menu: ResolverTypeWrapper<Menu>;
  menu_aggregate: ResolverTypeWrapper<Menu_Aggregate>;
  menu_aggregate_fields: ResolverTypeWrapper<Menu_Aggregate_Fields>;
  menu_avg_fields: ResolverTypeWrapper<Menu_Avg_Fields>;
  menu_bool_exp: Menu_Bool_Exp;
  menu_constraint: Menu_Constraint;
  menu_inc_input: Menu_Inc_Input;
  menu_insert_input: Menu_Insert_Input;
  menu_max_fields: ResolverTypeWrapper<Menu_Max_Fields>;
  menu_min_fields: ResolverTypeWrapper<Menu_Min_Fields>;
  menu_mutation_response: ResolverTypeWrapper<Menu_Mutation_Response>;
  menu_on_conflict: Menu_On_Conflict;
  menu_order_by: Menu_Order_By;
  menu_pk_columns_input: Menu_Pk_Columns_Input;
  menu_select_column: Menu_Select_Column;
  menu_set_input: Menu_Set_Input;
  menu_stddev_fields: ResolverTypeWrapper<Menu_Stddev_Fields>;
  menu_stddev_pop_fields: ResolverTypeWrapper<Menu_Stddev_Pop_Fields>;
  menu_stddev_samp_fields: ResolverTypeWrapper<Menu_Stddev_Samp_Fields>;
  menu_stream_cursor_input: Menu_Stream_Cursor_Input;
  menu_stream_cursor_value_input: Menu_Stream_Cursor_Value_Input;
  menu_sum_fields: ResolverTypeWrapper<Menu_Sum_Fields>;
  menu_update_column: Menu_Update_Column;
  menu_updates: Menu_Updates;
  menu_var_pop_fields: ResolverTypeWrapper<Menu_Var_Pop_Fields>;
  menu_var_samp_fields: ResolverTypeWrapper<Menu_Var_Samp_Fields>;
  menu_variance_fields: ResolverTypeWrapper<Menu_Variance_Fields>;
  mutation_root: ResolverTypeWrapper<{}>;
  numeric: ResolverTypeWrapper<Scalars['numeric']['output']>;
  numeric_comparison_exp: Numeric_Comparison_Exp;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  subscription_root: ResolverTypeWrapper<{}>;
  uuid: ResolverTypeWrapper<Scalars['uuid']['output']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AdminLoginInput: AdminLoginInput;
  AdminLoginOutput: AdminLoginOutput;
  AdminRegisterInput: AdminRegisterInput;
  AdminRegisterOutput: AdminRegisterOutput;
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  String: Scalars['String']['output'];
  String_comparison_exp: String_Comparison_Exp;
  admin: Admin;
  admin_aggregate: Admin_Aggregate;
  admin_aggregate_fields: Admin_Aggregate_Fields;
  admin_bool_exp: Admin_Bool_Exp;
  admin_insert_input: Admin_Insert_Input;
  admin_max_fields: Admin_Max_Fields;
  admin_min_fields: Admin_Min_Fields;
  admin_mutation_response: Admin_Mutation_Response;
  admin_on_conflict: Admin_On_Conflict;
  admin_order_by: Admin_Order_By;
  admin_pk_columns_input: Admin_Pk_Columns_Input;
  admin_set_input: Admin_Set_Input;
  admin_stream_cursor_input: Admin_Stream_Cursor_Input;
  admin_stream_cursor_value_input: Admin_Stream_Cursor_Value_Input;
  admin_updates: Admin_Updates;
  menu: Menu;
  menu_aggregate: Menu_Aggregate;
  menu_aggregate_fields: Menu_Aggregate_Fields;
  menu_avg_fields: Menu_Avg_Fields;
  menu_bool_exp: Menu_Bool_Exp;
  menu_inc_input: Menu_Inc_Input;
  menu_insert_input: Menu_Insert_Input;
  menu_max_fields: Menu_Max_Fields;
  menu_min_fields: Menu_Min_Fields;
  menu_mutation_response: Menu_Mutation_Response;
  menu_on_conflict: Menu_On_Conflict;
  menu_order_by: Menu_Order_By;
  menu_pk_columns_input: Menu_Pk_Columns_Input;
  menu_set_input: Menu_Set_Input;
  menu_stddev_fields: Menu_Stddev_Fields;
  menu_stddev_pop_fields: Menu_Stddev_Pop_Fields;
  menu_stddev_samp_fields: Menu_Stddev_Samp_Fields;
  menu_stream_cursor_input: Menu_Stream_Cursor_Input;
  menu_stream_cursor_value_input: Menu_Stream_Cursor_Value_Input;
  menu_sum_fields: Menu_Sum_Fields;
  menu_updates: Menu_Updates;
  menu_var_pop_fields: Menu_Var_Pop_Fields;
  menu_var_samp_fields: Menu_Var_Samp_Fields;
  menu_variance_fields: Menu_Variance_Fields;
  mutation_root: {};
  numeric: Scalars['numeric']['output'];
  numeric_comparison_exp: Numeric_Comparison_Exp;
  query_root: {};
  subscription_root: {};
  uuid: Scalars['uuid']['output'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean']['input'];
  ttl?: Scalars['Int']['input'];
};

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AdminLoginOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminLoginOutput'] = ResolversParentTypes['AdminLoginOutput']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminRegisterOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminRegisterOutput'] = ResolversParentTypes['AdminRegisterOutput']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminResolvers<ContextType = any, ParentType extends ResolversParentTypes['admin'] = ResolversParentTypes['admin']> = {
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Admin_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['admin_aggregate'] = ResolversParentTypes['admin_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['admin_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['admin']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Admin_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['admin_aggregate_fields'] = ResolversParentTypes['admin_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Admin_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['admin_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['admin_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Admin_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['admin_max_fields'] = ResolversParentTypes['admin_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Admin_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['admin_min_fields'] = ResolversParentTypes['admin_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Admin_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['admin_mutation_response'] = ResolversParentTypes['admin_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['admin']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MenuResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu'] = ResolversParentTypes['menu']> = {
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ingredients?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Menu_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_aggregate'] = ResolversParentTypes['menu_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['menu_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['menu']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Menu_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_aggregate_fields'] = ResolversParentTypes['menu_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['menu_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Menu_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['menu_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['menu_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['menu_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['menu_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['menu_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['menu_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['menu_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['menu_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['menu_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Menu_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_avg_fields'] = ResolversParentTypes['menu_avg_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Menu_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_max_fields'] = ResolversParentTypes['menu_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ingredients?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Menu_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_min_fields'] = ResolversParentTypes['menu_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ingredients?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Menu_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_mutation_response'] = ResolversParentTypes['menu_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['menu']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Menu_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_stddev_fields'] = ResolversParentTypes['menu_stddev_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Menu_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_stddev_pop_fields'] = ResolversParentTypes['menu_stddev_pop_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Menu_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_stddev_samp_fields'] = ResolversParentTypes['menu_stddev_samp_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Menu_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_sum_fields'] = ResolversParentTypes['menu_sum_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Menu_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_var_pop_fields'] = ResolversParentTypes['menu_var_pop_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Menu_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_var_samp_fields'] = ResolversParentTypes['menu_var_samp_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Menu_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_variance_fields'] = ResolversParentTypes['menu_variance_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  adminRegister?: Resolver<Maybe<ResolversTypes['AdminRegisterOutput']>, ParentType, ContextType, RequireFields<Mutation_RootAdminRegisterArgs, 'admin'>>;
  delete_admin?: Resolver<Maybe<ResolversTypes['admin_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_AdminArgs, 'where'>>;
  delete_admin_by_pk?: Resolver<Maybe<ResolversTypes['admin']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Admin_By_PkArgs, 'id'>>;
  delete_menu?: Resolver<Maybe<ResolversTypes['menu_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_MenuArgs, 'where'>>;
  delete_menu_by_pk?: Resolver<Maybe<ResolversTypes['menu']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Menu_By_PkArgs, 'id'>>;
  insert_admin?: Resolver<Maybe<ResolversTypes['admin_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_AdminArgs, 'objects'>>;
  insert_admin_one?: Resolver<Maybe<ResolversTypes['admin']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Admin_OneArgs, 'object'>>;
  insert_menu?: Resolver<Maybe<ResolversTypes['menu_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_MenuArgs, 'objects'>>;
  insert_menu_one?: Resolver<Maybe<ResolversTypes['menu']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Menu_OneArgs, 'object'>>;
  update_admin?: Resolver<Maybe<ResolversTypes['admin_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_AdminArgs, 'where'>>;
  update_admin_by_pk?: Resolver<Maybe<ResolversTypes['admin']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Admin_By_PkArgs, 'pk_columns'>>;
  update_admin_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['admin_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Admin_ManyArgs, 'updates'>>;
  update_menu?: Resolver<Maybe<ResolversTypes['menu_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_MenuArgs, 'where'>>;
  update_menu_by_pk?: Resolver<Maybe<ResolversTypes['menu']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Menu_By_PkArgs, 'pk_columns'>>;
  update_menu_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['menu_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Menu_ManyArgs, 'updates'>>;
};

export interface NumericScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['numeric'], any> {
  name: 'numeric';
}

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  admin?: Resolver<Array<ResolversTypes['admin']>, ParentType, ContextType, Partial<Query_RootAdminArgs>>;
  adminLogin?: Resolver<Maybe<ResolversTypes['AdminLoginOutput']>, ParentType, ContextType, RequireFields<Query_RootAdminLoginArgs, 'arg1'>>;
  admin_aggregate?: Resolver<ResolversTypes['admin_aggregate'], ParentType, ContextType, Partial<Query_RootAdmin_AggregateArgs>>;
  admin_by_pk?: Resolver<Maybe<ResolversTypes['admin']>, ParentType, ContextType, RequireFields<Query_RootAdmin_By_PkArgs, 'id'>>;
  menu?: Resolver<Array<ResolversTypes['menu']>, ParentType, ContextType, Partial<Query_RootMenuArgs>>;
  menu_aggregate?: Resolver<ResolversTypes['menu_aggregate'], ParentType, ContextType, Partial<Query_RootMenu_AggregateArgs>>;
  menu_by_pk?: Resolver<Maybe<ResolversTypes['menu']>, ParentType, ContextType, RequireFields<Query_RootMenu_By_PkArgs, 'id'>>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  admin?: SubscriptionResolver<Array<ResolversTypes['admin']>, "admin", ParentType, ContextType, Partial<Subscription_RootAdminArgs>>;
  admin_aggregate?: SubscriptionResolver<ResolversTypes['admin_aggregate'], "admin_aggregate", ParentType, ContextType, Partial<Subscription_RootAdmin_AggregateArgs>>;
  admin_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['admin']>, "admin_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAdmin_By_PkArgs, 'id'>>;
  admin_stream?: SubscriptionResolver<Array<ResolversTypes['admin']>, "admin_stream", ParentType, ContextType, RequireFields<Subscription_RootAdmin_StreamArgs, 'batch_size' | 'cursor'>>;
  menu?: SubscriptionResolver<Array<ResolversTypes['menu']>, "menu", ParentType, ContextType, Partial<Subscription_RootMenuArgs>>;
  menu_aggregate?: SubscriptionResolver<ResolversTypes['menu_aggregate'], "menu_aggregate", ParentType, ContextType, Partial<Subscription_RootMenu_AggregateArgs>>;
  menu_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['menu']>, "menu_by_pk", ParentType, ContextType, RequireFields<Subscription_RootMenu_By_PkArgs, 'id'>>;
  menu_stream?: SubscriptionResolver<Array<ResolversTypes['menu']>, "menu_stream", ParentType, ContextType, RequireFields<Subscription_RootMenu_StreamArgs, 'batch_size' | 'cursor'>>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = {
  AdminLoginOutput?: AdminLoginOutputResolvers<ContextType>;
  AdminRegisterOutput?: AdminRegisterOutputResolvers<ContextType>;
  admin?: AdminResolvers<ContextType>;
  admin_aggregate?: Admin_AggregateResolvers<ContextType>;
  admin_aggregate_fields?: Admin_Aggregate_FieldsResolvers<ContextType>;
  admin_max_fields?: Admin_Max_FieldsResolvers<ContextType>;
  admin_min_fields?: Admin_Min_FieldsResolvers<ContextType>;
  admin_mutation_response?: Admin_Mutation_ResponseResolvers<ContextType>;
  menu?: MenuResolvers<ContextType>;
  menu_aggregate?: Menu_AggregateResolvers<ContextType>;
  menu_aggregate_fields?: Menu_Aggregate_FieldsResolvers<ContextType>;
  menu_avg_fields?: Menu_Avg_FieldsResolvers<ContextType>;
  menu_max_fields?: Menu_Max_FieldsResolvers<ContextType>;
  menu_min_fields?: Menu_Min_FieldsResolvers<ContextType>;
  menu_mutation_response?: Menu_Mutation_ResponseResolvers<ContextType>;
  menu_stddev_fields?: Menu_Stddev_FieldsResolvers<ContextType>;
  menu_stddev_pop_fields?: Menu_Stddev_Pop_FieldsResolvers<ContextType>;
  menu_stddev_samp_fields?: Menu_Stddev_Samp_FieldsResolvers<ContextType>;
  menu_sum_fields?: Menu_Sum_FieldsResolvers<ContextType>;
  menu_var_pop_fields?: Menu_Var_Pop_FieldsResolvers<ContextType>;
  menu_var_samp_fields?: Menu_Var_Samp_FieldsResolvers<ContextType>;
  menu_variance_fields?: Menu_Variance_FieldsResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  numeric?: GraphQLScalarType;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  uuid?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};

export type GetAdminByUsernameQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type GetAdminByUsernameQuery = { __typename?: 'query_root', admin: Array<{ __typename?: 'admin', id: any, password: string }> };

export type InsertAdminMutationVariables = Exact<{
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type InsertAdminMutation = { __typename?: 'mutation_root', insert_admin_one?: { __typename?: 'admin', id: any } | null };


export const GetAdminByUsernameDocument = gql`
    query GetAdminByUsername($username: String!) {
  admin(where: {username: {_eq: $username}}) {
    id
    password
  }
}
    `;
export const InsertAdminDocument = gql`
    mutation InsertAdmin($password: String!, $username: String!) {
  insert_admin_one(object: {password: $password, username: $username}) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAdminByUsername(variables: GetAdminByUsernameQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAdminByUsernameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAdminByUsernameQuery>(GetAdminByUsernameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAdminByUsername', 'query');
    },
    InsertAdmin(variables: InsertAdminMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertAdminMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertAdminMutation>(InsertAdminDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'InsertAdmin', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;