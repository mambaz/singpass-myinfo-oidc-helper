import * as moment from "moment";
import { MyInfoComponents, MyInfoLifeStatusCode, MyInfoSexCode } from "../../domain";

export const formatDateToString = (date?: moment.Moment): string => {
	if (date) {
		return date.format("YYYY-MM-DD").toString();
	}
	return moment().format("YYYY-MM-DD").toString();
};

export const preschoolEligibleChild_IC = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T5170081Z" },
	name: { value: "Ezra Lee" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_N2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T8478075D" },
	name: { value: "Elliot Lee" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_PG = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T6664586F" },
	name: { value: "Ella Lee" },
	dob: { value: formatDateToString(moment().subtract(18, "months")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_N1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T1963041I" },
	name: { value: "Ellie Lee" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_K1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T4524789E" },
	name: { value: "Emma Lee" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild_K2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T8677396H" },
	name: { value: "Kelly Lee" },
	dob: { value: formatDateToString(moment().subtract(6, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_N1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T4816254H" },
	name: { value: "Kylie Lee" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_IC = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T6093535H" },
	name: { value: "Karol Lee" },
	dob: { value: formatDateToString(moment().subtract(6, "months")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_K1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T8518803D" },
	name: { value: "Kara Lee" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_N2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T1405260C" },
	name: { value: "Sara Lee" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_PG = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T7358432E" },
	name: { value: "Stella Lee" },
	dob: { value: formatDateToString(moment().subtract(22, "months")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolEligibleChild2_K2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T8267964I" },
	name: { value: "Sonia Lee" },
	dob: { value: formatDateToString(moment().subtract(9, "months")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;


export const preschoolIneligibleChild1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T5190633G" },
	name: { value: "Emmy Lee" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const preschoolIneligibleChild2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T5492029B" },
	name: { value: "Emmanuel Lee" },
	dob: { value: formatDateToString(moment().subtract(7, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;


const childYoungest = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T7222687E" },
	name: { value: "Youngest Tan Ke Xuan" },
	dob: { value: formatDateToString() },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const child1MonthOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T4084691Z" },
	name: { value: "1 Month Tan Ke Yu" },
	dob: { value: formatDateToString(moment().subtract(1, "months")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const child2MonthsOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T6601934E" },
	name: { value: "2 Months Tan Keh Guan" },
	dob: { value: formatDateToString(moment().subtract(2, "months")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childMiddle1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T3272623I" },
	name: { value: "Middle Tan Twin1" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childMiddle2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T7170632F" },
	name: { value: "Middle Tan Twin2" },
	dob: { value: formatDateToString(moment().subtract(2, "years")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childMiddle3 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T9984688C" },
	name: { value: "Tan Boy" },
	dob: { value: formatDateToString(moment().subtract(3, "years")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;


const childMiddle4 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T5628710D" },
	name: { value: "Tan Girl" },
	dob: { value: formatDateToString(moment().subtract(4, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childMiddle5 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T1900115B" },
	name: { value: "Tan Girl Younger" },
	dob: { value: formatDateToString(moment().subtract(5, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childSuperOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T6038028C" },
	name: { value: "Super Old Tan Ke Wei" },
	dob: { value: formatDateToString(moment().subtract(8, "years")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const child6YearsOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T0202564C" }, // NRIC used to check for child immunisation records. please do not change.
	name: { value: "Turning 6 Tan Kid born Jan 1st" },
	dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const child7YearsOld = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T3895997I" },
	name: { value: "Turning 7 Tan Kid born Dec 31" },
	dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.ALIVE, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.ALIVE) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childDeceased1 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T5923152E" },
	name: { value: "Deceased child 1" },
	dob: { value: formatDateToString(moment().subtract(4, "years").endOf("year")) },
	sex: { code: MyInfoSexCode.MALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.MALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.DECEASED, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.DECEASED) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

const childDeceased2 = {
	source: "1",
	classification: "C",
	lastupdated: formatDateToString(),
	birthcertno: { value: "T6781942F" },
	name: { value: "Deceased child 2" },
	dob: { value: formatDateToString(moment().subtract(5, "years").endOf("year")) },
	sex: { code: MyInfoSexCode.FEMALE, desc: MyInfoSexCode.fn.toEnumDesc(MyInfoSexCode.FEMALE), },
	tob: { value: "2200" },
	lifestatus: { code: MyInfoLifeStatusCode.DECEASED, desc: MyInfoLifeStatusCode.fn.toEnumDesc(MyInfoLifeStatusCode.DECEASED) },
	unavailable: false,
} as MyInfoComponents.Schemas.Childrenbirthrecords;

export const ChildrenRecords = {
	childYoungest,
	child1MonthOld,
	child2MonthsOld,
	childMiddle1,
	childMiddle2,
	childMiddle3,
	childMiddle4,
	childMiddle5,
	childSuperOld,
	child6YearsOld,
	child7YearsOld,
	childDeceased1,
	childDeceased2,
};
