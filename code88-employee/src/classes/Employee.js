import { DEPARTMENT, GENDER, STATUS } from '../constants/EmployeeConstant';

export default class Employee {
    constructor({englishName = '', vietnameseName = '', department = DEPARTMENT.ALL.KEY, 
        gender = GENDER.ALL.KEY, discription = '', status = STATUS.ACTIVE.KEY, manager = false}) {
            this.englishName = englishName;
            this.vietnameseName = vietnameseName;
            this.department = department;
            this.gender = gender;
            this.discription = discription;
            this.status = status;
            this.manager = manager;
    }
}