type Cohort {
  id: ID
  studentCount: Number
  region: String
}

type NotConnected {
  id: ID
  user: User
}

type User {
  id: ID
  location: Location
  cohort: String
}

type Location {
  id: ID
  gps: Number
  third: Third
} 

type Third {
  id: ID
  user: User
}
