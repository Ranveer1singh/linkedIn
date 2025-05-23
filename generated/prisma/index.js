
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  password: 'password',
  role: 'role',
  status: 'status'
};

exports.Prisma.CandidateProfileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  fullName: 'fullName',
  gender: 'gender',
  phone: 'phone',
  cv: 'cv',
  birthDate: 'birthDate',
  address: 'address',
  status: 'status',
  openToWork: 'openToWork'
};

exports.Prisma.LanguageScalarFieldEnum = {
  name: 'name'
};

exports.Prisma.CandidateLanguageScalarFieldEnum = {
  candidateProfileId: 'candidateProfileId',
  level: 'level',
  languageName: 'languageName'
};

exports.Prisma.EducationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  map: 'map'
};

exports.Prisma.CandidateEducationScalarFieldEnum = {
  candidateProfileId: 'candidateProfileId',
  educationId: 'educationId',
  major: 'major',
  degree: 'degree',
  startYear: 'startYear',
  endYear: 'endYear'
};

exports.Prisma.SkillScalarFieldEnum = {
  name: 'name'
};

exports.Prisma.CandidateSkillScalarFieldEnum = {
  candidateProfileId: 'candidateProfileId',
  skillName: 'skillName'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Gender = exports.$Enums.Gender = {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  RECRUITER: 'RECRUITER',
  CANDIDATE: 'CANDIDATE'
};

exports.Level = exports.$Enums.Level = {
  NATIVE: 'NATIVE',
  FLUENT: 'FLUENT',
  BASIC: 'BASIC'
};

exports.DEGREE = exports.$Enums.DEGREE = {
  BACHELORS: 'BACHELORS',
  MASTER: 'MASTER',
  ENGINEER: 'ENGINEER'
};

exports.Prisma.ModelName = {
  User: 'User',
  CandidateProfile: 'CandidateProfile',
  Language: 'Language',
  CandidateLanguage: 'CandidateLanguage',
  Education: 'Education',
  CandidateEducation: 'CandidateEducation',
  skill: 'skill',
  CandidateSkill: 'CandidateSkill'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\E_drive\\linkedIn\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "E:\\E_drive\\linkedIn\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "postgresql://postgres:Ranveer@123@localhost:5432/linkedIn_db?schema=public"
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n/**\n * =================================== USER MODEL ======================================\n */\nmodel User {\n  id               String            @id @default(uuid())\n  email            String            @unique\n  name             String?\n  password         String\n  role             Role              @default(CANDIDATE)\n  status           Boolean           @default(true)\n  candidateProfile CandidateProfile?\n}\n\n/**\n * =================================== Candidate MODEL ======================================\n */\n\n// One To One \nmodel CandidateProfile {\n  id                 String               @id @default(uuid())\n  user               User                 @relation(fields: [userId], references: [id])\n  userId             String               @unique\n  fullName           String\n  gender             Gender\n  phone              String\n  cv                 String\n  birthDate          DateTime\n  address            String\n  status             Boolean              @default(true)\n  openToWork         Boolean              @default(false)\n  candidateLanguage  CandidateLanguage[]\n  candidateEducation CandidateEducation[]\n  candidateSkills    CandidateSkill[]\n}\n\nenum Gender {\n  MALE\n  FEMALE\n}\n\nenum Role {\n  ADMIN\n  RECRUITER\n  CANDIDATE\n}\n\n/**\n * =================================== language MODEL ======================================\n */\nmodel Language {\n  name              String              @id\n  candidateLanguage CandidateLanguage[]\n}\n\n/**\n * =================================== Candidate language MODEL ======================================\n */\nmodel CandidateLanguage {\n  candidateProfile   CandidateProfile @relation(fields: [candidateProfileId], references: [id])\n  candidateProfileId String\n  level              Level            @default(BASIC)\n  language           Language         @relation(fields: [languageName], references: [name])\n  languageName       String\n\n  @@unique([candidateProfileId, languageName])\n}\n\nenum Level {\n  NATIVE\n  FLUENT\n  BASIC\n}\n\n/**\n * ===================================  EDUCATION MODEL ======================================\n */\nmodel Education {\n  id                 String               @id @default(uuid())\n  name               String\n  map                String\n  candidateEducation CandidateEducation[]\n}\n\n/**\n * =================================== Candidate EDUCATION MODEL ======================================\n */\nmodel CandidateEducation {\n  candidateProfile   CandidateProfile @relation(fields: [candidateProfileId], references: [id])\n  candidateProfileId String\n  education          Education        @relation(fields: [educationId], references: [id])\n  educationId        String\n  major              String\n  degree             DEGREE           @default(BACHELORS)\n  startYear          DateTime\n  endYear            DateTime\n\n  @@id([candidateProfileId, educationId])\n}\n\nenum DEGREE {\n  BACHELORS\n  MASTER\n  ENGINEER\n}\n\n/**\n * =================================== SKILL MODEL ======================================\n */\nmodel skill {\n  name            String           @id\n  candidateSkills CandidateSkill[]\n}\n\n/**\n * =================================== candidateSKILL MODEL ======================================\n */\nmodel CandidateSkill {\n  candidateProfile   CandidateProfile @relation(fields: [candidateProfileId], references: [id])\n  candidateProfileId String\n\n  skill     skill  @relation(fields: [skillName], references: [name])\n  skillName String\n\n  @@id([candidateProfileId, skillName])\n}\n",
  "inlineSchemaHash": "35d38fcb9c1f98095b0395a3c31f9d5f22f167c00e8e6df2d1b259fc74b03eab",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/prisma",
    "prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Role\",\"nativeType\":null,\"default\":\"CANDIDATE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidateProfile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateProfile\",\"nativeType\":null,\"relationName\":\"CandidateProfileToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"=================================== USER MODEL ======================================\"},\"CandidateProfile\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"CandidateProfileToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fullName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gender\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cv\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birthDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"openToWork\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidateLanguage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateLanguage\",\"nativeType\":null,\"relationName\":\"CandidateLanguageToCandidateProfile\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidateEducation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateEducation\",\"nativeType\":null,\"relationName\":\"CandidateEducationToCandidateProfile\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidateSkills\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateSkill\",\"nativeType\":null,\"relationName\":\"CandidateProfileToCandidateSkill\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Language\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidateLanguage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateLanguage\",\"nativeType\":null,\"relationName\":\"CandidateLanguageToLanguage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"=================================== language MODEL ======================================\"},\"CandidateLanguage\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"candidateProfile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateProfile\",\"nativeType\":null,\"relationName\":\"CandidateLanguageToCandidateProfile\",\"relationFromFields\":[\"candidateProfileId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidateProfileId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Level\",\"nativeType\":null,\"default\":\"BASIC\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"language\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Language\",\"nativeType\":null,\"relationName\":\"CandidateLanguageToLanguage\",\"relationFromFields\":[\"languageName\"],\"relationToFields\":[\"name\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"languageName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"candidateProfileId\",\"languageName\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"candidateProfileId\",\"languageName\"]}],\"isGenerated\":false,\"documentation\":\"=================================== Candidate language MODEL ======================================\"},\"Education\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"map\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidateEducation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateEducation\",\"nativeType\":null,\"relationName\":\"CandidateEducationToEducation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"===================================  EDUCATION MODEL ======================================\"},\"CandidateEducation\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"candidateProfile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateProfile\",\"nativeType\":null,\"relationName\":\"CandidateEducationToCandidateProfile\",\"relationFromFields\":[\"candidateProfileId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidateProfileId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"education\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Education\",\"nativeType\":null,\"relationName\":\"CandidateEducationToEducation\",\"relationFromFields\":[\"educationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"educationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"major\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"degree\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DEGREE\",\"nativeType\":null,\"default\":\"BACHELORS\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"candidateProfileId\",\"educationId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"=================================== Candidate EDUCATION MODEL ======================================\"},\"skill\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidateSkills\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateSkill\",\"nativeType\":null,\"relationName\":\"CandidateSkillToskill\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"=================================== SKILL MODEL ======================================\"},\"CandidateSkill\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"candidateProfile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CandidateProfile\",\"nativeType\":null,\"relationName\":\"CandidateProfileToCandidateSkill\",\"relationFromFields\":[\"candidateProfileId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"candidateProfileId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skill\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"skill\",\"nativeType\":null,\"relationName\":\"CandidateSkillToskill\",\"relationFromFields\":[\"skillName\"],\"relationToFields\":[\"name\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skillName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"candidateProfileId\",\"skillName\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"=================================== candidateSKILL MODEL ======================================\"}},\"enums\":{\"Gender\":{\"values\":[{\"name\":\"MALE\",\"dbName\":null},{\"name\":\"FEMALE\",\"dbName\":null}],\"dbName\":null},\"Role\":{\"values\":[{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"RECRUITER\",\"dbName\":null},{\"name\":\"CANDIDATE\",\"dbName\":null}],\"dbName\":null},\"Level\":{\"values\":[{\"name\":\"NATIVE\",\"dbName\":null},{\"name\":\"FLUENT\",\"dbName\":null},{\"name\":\"BASIC\",\"dbName\":null}],\"dbName\":null},\"DEGREE\":{\"values\":[{\"name\":\"BACHELORS\",\"dbName\":null},{\"name\":\"MASTER\",\"dbName\":null},{\"name\":\"ENGINEER\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/prisma/schema.prisma")
