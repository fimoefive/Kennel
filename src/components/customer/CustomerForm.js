import React, { useContext, useEffect, useRef } from 'react'
import { CustomerContext } from './CustomerProvider'
import { EmployeeContext } from './employee/EmployeeProvider'
import { LocationContext } from '../location/LocationProvider'
import './Customer.css'
import { useHistory } from 'react-router-dom';