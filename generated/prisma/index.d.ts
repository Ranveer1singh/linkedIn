
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * =================================== USER MODEL ======================================
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CandidateProfile
 * 
 */
export type CandidateProfile = $Result.DefaultSelection<Prisma.$CandidateProfilePayload>
/**
 * Model Language
 * =================================== language MODEL ======================================
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model CandidateLanguage
 * =================================== Candidate language MODEL ======================================
 */
export type CandidateLanguage = $Result.DefaultSelection<Prisma.$CandidateLanguagePayload>
/**
 * Model Education
 * ===================================  EDUCATION MODEL ======================================
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model CandidateEducation
 * =================================== Candidate EDUCATION MODEL ======================================
 */
export type CandidateEducation = $Result.DefaultSelection<Prisma.$CandidateEducationPayload>
/**
 * Model skill
 * =================================== SKILL MODEL ======================================
 */
export type skill = $Result.DefaultSelection<Prisma.$skillPayload>
/**
 * Model CandidateSkill
 * =================================== candidateSKILL MODEL ======================================
 */
export type CandidateSkill = $Result.DefaultSelection<Prisma.$CandidateSkillPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Role: {
  ADMIN: 'ADMIN',
  RECRUITER: 'RECRUITER',
  CANDIDATE: 'CANDIDATE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Level: {
  NATIVE: 'NATIVE',
  FLUENT: 'FLUENT',
  BASIC: 'BASIC'
};

export type Level = (typeof Level)[keyof typeof Level]


export const DEGREE: {
  BACHELORS: 'BACHELORS',
  MASTER: 'MASTER',
  ENGINEER: 'ENGINEER'
};

export type DEGREE = (typeof DEGREE)[keyof typeof DEGREE]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Level = $Enums.Level

export const Level: typeof $Enums.Level

export type DEGREE = $Enums.DEGREE

export const DEGREE: typeof $Enums.DEGREE

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidateProfile`: Exposes CRUD operations for the **CandidateProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidateProfiles
    * const candidateProfiles = await prisma.candidateProfile.findMany()
    * ```
    */
  get candidateProfile(): Prisma.CandidateProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidateLanguage`: Exposes CRUD operations for the **CandidateLanguage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidateLanguages
    * const candidateLanguages = await prisma.candidateLanguage.findMany()
    * ```
    */
  get candidateLanguage(): Prisma.CandidateLanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidateEducation`: Exposes CRUD operations for the **CandidateEducation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidateEducations
    * const candidateEducations = await prisma.candidateEducation.findMany()
    * ```
    */
  get candidateEducation(): Prisma.CandidateEducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.skillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidateSkill`: Exposes CRUD operations for the **CandidateSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidateSkills
    * const candidateSkills = await prisma.candidateSkill.findMany()
    * ```
    */
  get candidateSkill(): Prisma.CandidateSkillDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CandidateProfile: 'CandidateProfile',
    Language: 'Language',
    CandidateLanguage: 'CandidateLanguage',
    Education: 'Education',
    CandidateEducation: 'CandidateEducation',
    skill: 'skill',
    CandidateSkill: 'CandidateSkill'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "candidateProfile" | "language" | "candidateLanguage" | "education" | "candidateEducation" | "skill" | "candidateSkill"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CandidateProfile: {
        payload: Prisma.$CandidateProfilePayload<ExtArgs>
        fields: Prisma.CandidateProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          findFirst: {
            args: Prisma.CandidateProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          findMany: {
            args: Prisma.CandidateProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>[]
          }
          create: {
            args: Prisma.CandidateProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          createMany: {
            args: Prisma.CandidateProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>[]
          }
          delete: {
            args: Prisma.CandidateProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          update: {
            args: Prisma.CandidateProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          deleteMany: {
            args: Prisma.CandidateProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>[]
          }
          upsert: {
            args: Prisma.CandidateProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          aggregate: {
            args: Prisma.CandidateProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidateProfile>
          }
          groupBy: {
            args: Prisma.CandidateProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateProfileCountAggregateOutputType> | number
          }
        }
      }
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
      CandidateLanguage: {
        payload: Prisma.$CandidateLanguagePayload<ExtArgs>
        fields: Prisma.CandidateLanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateLanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateLanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>
          }
          findFirst: {
            args: Prisma.CandidateLanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateLanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>
          }
          findMany: {
            args: Prisma.CandidateLanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>[]
          }
          create: {
            args: Prisma.CandidateLanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>
          }
          createMany: {
            args: Prisma.CandidateLanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateLanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>[]
          }
          delete: {
            args: Prisma.CandidateLanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>
          }
          update: {
            args: Prisma.CandidateLanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>
          }
          deleteMany: {
            args: Prisma.CandidateLanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateLanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateLanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>[]
          }
          upsert: {
            args: Prisma.CandidateLanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateLanguagePayload>
          }
          aggregate: {
            args: Prisma.CandidateLanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidateLanguage>
          }
          groupBy: {
            args: Prisma.CandidateLanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateLanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateLanguageCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateLanguageCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      CandidateEducation: {
        payload: Prisma.$CandidateEducationPayload<ExtArgs>
        fields: Prisma.CandidateEducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateEducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateEducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>
          }
          findFirst: {
            args: Prisma.CandidateEducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateEducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>
          }
          findMany: {
            args: Prisma.CandidateEducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>[]
          }
          create: {
            args: Prisma.CandidateEducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>
          }
          createMany: {
            args: Prisma.CandidateEducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateEducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>[]
          }
          delete: {
            args: Prisma.CandidateEducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>
          }
          update: {
            args: Prisma.CandidateEducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>
          }
          deleteMany: {
            args: Prisma.CandidateEducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateEducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateEducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>[]
          }
          upsert: {
            args: Prisma.CandidateEducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateEducationPayload>
          }
          aggregate: {
            args: Prisma.CandidateEducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidateEducation>
          }
          groupBy: {
            args: Prisma.CandidateEducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateEducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateEducationCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateEducationCountAggregateOutputType> | number
          }
        }
      }
      skill: {
        payload: Prisma.$skillPayload<ExtArgs>
        fields: Prisma.skillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findFirst: {
            args: Prisma.skillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findMany: {
            args: Prisma.skillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          create: {
            args: Prisma.skillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          createMany: {
            args: Prisma.skillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.skillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          delete: {
            args: Prisma.skillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          update: {
            args: Prisma.skillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          deleteMany: {
            args: Prisma.skillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.skillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          upsert: {
            args: Prisma.skillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.skillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.skillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      CandidateSkill: {
        payload: Prisma.$CandidateSkillPayload<ExtArgs>
        fields: Prisma.CandidateSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>
          }
          findFirst: {
            args: Prisma.CandidateSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>
          }
          findMany: {
            args: Prisma.CandidateSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>[]
          }
          create: {
            args: Prisma.CandidateSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>
          }
          createMany: {
            args: Prisma.CandidateSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>[]
          }
          delete: {
            args: Prisma.CandidateSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>
          }
          update: {
            args: Prisma.CandidateSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>
          }
          deleteMany: {
            args: Prisma.CandidateSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>[]
          }
          upsert: {
            args: Prisma.CandidateSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>
          }
          aggregate: {
            args: Prisma.CandidateSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidateSkill>
          }
          groupBy: {
            args: Prisma.CandidateSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateSkillCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateSkillCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    candidateProfile?: CandidateProfileOmit
    language?: LanguageOmit
    candidateLanguage?: CandidateLanguageOmit
    education?: EducationOmit
    candidateEducation?: CandidateEducationOmit
    skill?: skillOmit
    candidateSkill?: CandidateSkillOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CandidateProfileCountOutputType
   */

  export type CandidateProfileCountOutputType = {
    candidateLanguage: number
    candidateEducation: number
    candidateSkills: number
  }

  export type CandidateProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateLanguage?: boolean | CandidateProfileCountOutputTypeCountCandidateLanguageArgs
    candidateEducation?: boolean | CandidateProfileCountOutputTypeCountCandidateEducationArgs
    candidateSkills?: boolean | CandidateProfileCountOutputTypeCountCandidateSkillsArgs
  }

  // Custom InputTypes
  /**
   * CandidateProfileCountOutputType without action
   */
  export type CandidateProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfileCountOutputType
     */
    select?: CandidateProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidateProfileCountOutputType without action
   */
  export type CandidateProfileCountOutputTypeCountCandidateLanguageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateLanguageWhereInput
  }

  /**
   * CandidateProfileCountOutputType without action
   */
  export type CandidateProfileCountOutputTypeCountCandidateEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateEducationWhereInput
  }

  /**
   * CandidateProfileCountOutputType without action
   */
  export type CandidateProfileCountOutputTypeCountCandidateSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateSkillWhereInput
  }


  /**
   * Count Type LanguageCountOutputType
   */

  export type LanguageCountOutputType = {
    candidateLanguage: number
  }

  export type LanguageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateLanguage?: boolean | LanguageCountOutputTypeCountCandidateLanguageArgs
  }

  // Custom InputTypes
  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     */
    select?: LanguageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountCandidateLanguageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateLanguageWhereInput
  }


  /**
   * Count Type EducationCountOutputType
   */

  export type EducationCountOutputType = {
    candidateEducation: number
  }

  export type EducationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateEducation?: boolean | EducationCountOutputTypeCountCandidateEducationArgs
  }

  // Custom InputTypes
  /**
   * EducationCountOutputType without action
   */
  export type EducationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationCountOutputType
     */
    select?: EducationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EducationCountOutputType without action
   */
  export type EducationCountOutputTypeCountCandidateEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateEducationWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    candidateSkills: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateSkills?: boolean | SkillCountOutputTypeCountCandidateSkillsArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountCandidateSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateSkillWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    status: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    status: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    status: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    status?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    role: $Enums.Role
    status: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    candidateProfile?: boolean | User$candidateProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "status", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | User$candidateProfileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      candidateProfile: Prisma.$CandidateProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      role: $Enums.Role
      status: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidateProfile<T extends User$candidateProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$candidateProfileArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.candidateProfile
   */
  export type User$candidateProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    where?: CandidateProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CandidateProfile
   */

  export type AggregateCandidateProfile = {
    _count: CandidateProfileCountAggregateOutputType | null
    _min: CandidateProfileMinAggregateOutputType | null
    _max: CandidateProfileMaxAggregateOutputType | null
  }

  export type CandidateProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    gender: $Enums.Gender | null
    phone: string | null
    cv: string | null
    birthDate: Date | null
    address: string | null
    status: boolean | null
    openToWork: boolean | null
  }

  export type CandidateProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    gender: $Enums.Gender | null
    phone: string | null
    cv: string | null
    birthDate: Date | null
    address: string | null
    status: boolean | null
    openToWork: boolean | null
  }

  export type CandidateProfileCountAggregateOutputType = {
    id: number
    userId: number
    fullName: number
    gender: number
    phone: number
    cv: number
    birthDate: number
    address: number
    status: number
    openToWork: number
    _all: number
  }


  export type CandidateProfileMinAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    gender?: true
    phone?: true
    cv?: true
    birthDate?: true
    address?: true
    status?: true
    openToWork?: true
  }

  export type CandidateProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    gender?: true
    phone?: true
    cv?: true
    birthDate?: true
    address?: true
    status?: true
    openToWork?: true
  }

  export type CandidateProfileCountAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    gender?: true
    phone?: true
    cv?: true
    birthDate?: true
    address?: true
    status?: true
    openToWork?: true
    _all?: true
  }

  export type CandidateProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateProfile to aggregate.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidateProfiles
    **/
    _count?: true | CandidateProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateProfileMaxAggregateInputType
  }

  export type GetCandidateProfileAggregateType<T extends CandidateProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidateProfile[P]>
      : GetScalarType<T[P], AggregateCandidateProfile[P]>
  }




  export type CandidateProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateProfileWhereInput
    orderBy?: CandidateProfileOrderByWithAggregationInput | CandidateProfileOrderByWithAggregationInput[]
    by: CandidateProfileScalarFieldEnum[] | CandidateProfileScalarFieldEnum
    having?: CandidateProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateProfileCountAggregateInputType | true
    _min?: CandidateProfileMinAggregateInputType
    _max?: CandidateProfileMaxAggregateInputType
  }

  export type CandidateProfileGroupByOutputType = {
    id: string
    userId: string
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthDate: Date
    address: string
    status: boolean
    openToWork: boolean
    _count: CandidateProfileCountAggregateOutputType | null
    _min: CandidateProfileMinAggregateOutputType | null
    _max: CandidateProfileMaxAggregateOutputType | null
  }

  type GetCandidateProfileGroupByPayload<T extends CandidateProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateProfileGroupByOutputType[P]>
        }
      >
    >


  export type CandidateProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    gender?: boolean
    phone?: boolean
    cv?: boolean
    birthDate?: boolean
    address?: boolean
    status?: boolean
    openToWork?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    candidateLanguage?: boolean | CandidateProfile$candidateLanguageArgs<ExtArgs>
    candidateEducation?: boolean | CandidateProfile$candidateEducationArgs<ExtArgs>
    candidateSkills?: boolean | CandidateProfile$candidateSkillsArgs<ExtArgs>
    _count?: boolean | CandidateProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateProfile"]>

  export type CandidateProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    gender?: boolean
    phone?: boolean
    cv?: boolean
    birthDate?: boolean
    address?: boolean
    status?: boolean
    openToWork?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateProfile"]>

  export type CandidateProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    gender?: boolean
    phone?: boolean
    cv?: boolean
    birthDate?: boolean
    address?: boolean
    status?: boolean
    openToWork?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateProfile"]>

  export type CandidateProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    fullName?: boolean
    gender?: boolean
    phone?: boolean
    cv?: boolean
    birthDate?: boolean
    address?: boolean
    status?: boolean
    openToWork?: boolean
  }

  export type CandidateProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fullName" | "gender" | "phone" | "cv" | "birthDate" | "address" | "status" | "openToWork", ExtArgs["result"]["candidateProfile"]>
  export type CandidateProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    candidateLanguage?: boolean | CandidateProfile$candidateLanguageArgs<ExtArgs>
    candidateEducation?: boolean | CandidateProfile$candidateEducationArgs<ExtArgs>
    candidateSkills?: boolean | CandidateProfile$candidateSkillsArgs<ExtArgs>
    _count?: boolean | CandidateProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidateProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CandidateProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CandidateProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      candidateLanguage: Prisma.$CandidateLanguagePayload<ExtArgs>[]
      candidateEducation: Prisma.$CandidateEducationPayload<ExtArgs>[]
      candidateSkills: Prisma.$CandidateSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fullName: string
      gender: $Enums.Gender
      phone: string
      cv: string
      birthDate: Date
      address: string
      status: boolean
      openToWork: boolean
    }, ExtArgs["result"]["candidateProfile"]>
    composites: {}
  }

  type CandidateProfileGetPayload<S extends boolean | null | undefined | CandidateProfileDefaultArgs> = $Result.GetResult<Prisma.$CandidateProfilePayload, S>

  type CandidateProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateProfileCountAggregateInputType | true
    }

  export interface CandidateProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidateProfile'], meta: { name: 'CandidateProfile' } }
    /**
     * Find zero or one CandidateProfile that matches the filter.
     * @param {CandidateProfileFindUniqueArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateProfileFindUniqueArgs>(args: SelectSubset<T, CandidateProfileFindUniqueArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CandidateProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateProfileFindUniqueOrThrowArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileFindFirstArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateProfileFindFirstArgs>(args?: SelectSubset<T, CandidateProfileFindFirstArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileFindFirstOrThrowArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CandidateProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateProfiles
     * const candidateProfiles = await prisma.candidateProfile.findMany()
     * 
     * // Get first 10 CandidateProfiles
     * const candidateProfiles = await prisma.candidateProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateProfileWithIdOnly = await prisma.candidateProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateProfileFindManyArgs>(args?: SelectSubset<T, CandidateProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CandidateProfile.
     * @param {CandidateProfileCreateArgs} args - Arguments to create a CandidateProfile.
     * @example
     * // Create one CandidateProfile
     * const CandidateProfile = await prisma.candidateProfile.create({
     *   data: {
     *     // ... data to create a CandidateProfile
     *   }
     * })
     * 
     */
    create<T extends CandidateProfileCreateArgs>(args: SelectSubset<T, CandidateProfileCreateArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CandidateProfiles.
     * @param {CandidateProfileCreateManyArgs} args - Arguments to create many CandidateProfiles.
     * @example
     * // Create many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateProfileCreateManyArgs>(args?: SelectSubset<T, CandidateProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CandidateProfiles and returns the data saved in the database.
     * @param {CandidateProfileCreateManyAndReturnArgs} args - Arguments to create many CandidateProfiles.
     * @example
     * // Create many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CandidateProfiles and only return the `id`
     * const candidateProfileWithIdOnly = await prisma.candidateProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CandidateProfile.
     * @param {CandidateProfileDeleteArgs} args - Arguments to delete one CandidateProfile.
     * @example
     * // Delete one CandidateProfile
     * const CandidateProfile = await prisma.candidateProfile.delete({
     *   where: {
     *     // ... filter to delete one CandidateProfile
     *   }
     * })
     * 
     */
    delete<T extends CandidateProfileDeleteArgs>(args: SelectSubset<T, CandidateProfileDeleteArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CandidateProfile.
     * @param {CandidateProfileUpdateArgs} args - Arguments to update one CandidateProfile.
     * @example
     * // Update one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateProfileUpdateArgs>(args: SelectSubset<T, CandidateProfileUpdateArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CandidateProfiles.
     * @param {CandidateProfileDeleteManyArgs} args - Arguments to filter CandidateProfiles to delete.
     * @example
     * // Delete a few CandidateProfiles
     * const { count } = await prisma.candidateProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateProfileDeleteManyArgs>(args?: SelectSubset<T, CandidateProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateProfileUpdateManyArgs>(args: SelectSubset<T, CandidateProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateProfiles and returns the data updated in the database.
     * @param {CandidateProfileUpdateManyAndReturnArgs} args - Arguments to update many CandidateProfiles.
     * @example
     * // Update many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CandidateProfiles and only return the `id`
     * const candidateProfileWithIdOnly = await prisma.candidateProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CandidateProfile.
     * @param {CandidateProfileUpsertArgs} args - Arguments to update or create a CandidateProfile.
     * @example
     * // Update or create a CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.upsert({
     *   create: {
     *     // ... data to create a CandidateProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateProfile we want to update
     *   }
     * })
     */
    upsert<T extends CandidateProfileUpsertArgs>(args: SelectSubset<T, CandidateProfileUpsertArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CandidateProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileCountArgs} args - Arguments to filter CandidateProfiles to count.
     * @example
     * // Count the number of CandidateProfiles
     * const count = await prisma.candidateProfile.count({
     *   where: {
     *     // ... the filter for the CandidateProfiles we want to count
     *   }
     * })
    **/
    count<T extends CandidateProfileCountArgs>(
      args?: Subset<T, CandidateProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidateProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateProfileAggregateArgs>(args: Subset<T, CandidateProfileAggregateArgs>): Prisma.PrismaPromise<GetCandidateProfileAggregateType<T>>

    /**
     * Group by CandidateProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateProfileGroupByArgs['orderBy'] }
        : { orderBy?: CandidateProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidateProfile model
   */
  readonly fields: CandidateProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidateProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidateLanguage<T extends CandidateProfile$candidateLanguageArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfile$candidateLanguageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidateEducation<T extends CandidateProfile$candidateEducationArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfile$candidateEducationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidateSkills<T extends CandidateProfile$candidateSkillsArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfile$candidateSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CandidateProfile model
   */
  interface CandidateProfileFieldRefs {
    readonly id: FieldRef<"CandidateProfile", 'String'>
    readonly userId: FieldRef<"CandidateProfile", 'String'>
    readonly fullName: FieldRef<"CandidateProfile", 'String'>
    readonly gender: FieldRef<"CandidateProfile", 'Gender'>
    readonly phone: FieldRef<"CandidateProfile", 'String'>
    readonly cv: FieldRef<"CandidateProfile", 'String'>
    readonly birthDate: FieldRef<"CandidateProfile", 'DateTime'>
    readonly address: FieldRef<"CandidateProfile", 'String'>
    readonly status: FieldRef<"CandidateProfile", 'Boolean'>
    readonly openToWork: FieldRef<"CandidateProfile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CandidateProfile findUnique
   */
  export type CandidateProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile findUniqueOrThrow
   */
  export type CandidateProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile findFirst
   */
  export type CandidateProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateProfiles.
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateProfiles.
     */
    distinct?: CandidateProfileScalarFieldEnum | CandidateProfileScalarFieldEnum[]
  }

  /**
   * CandidateProfile findFirstOrThrow
   */
  export type CandidateProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateProfiles.
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateProfiles.
     */
    distinct?: CandidateProfileScalarFieldEnum | CandidateProfileScalarFieldEnum[]
  }

  /**
   * CandidateProfile findMany
   */
  export type CandidateProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfiles to fetch.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidateProfiles.
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    distinct?: CandidateProfileScalarFieldEnum | CandidateProfileScalarFieldEnum[]
  }

  /**
   * CandidateProfile create
   */
  export type CandidateProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CandidateProfile.
     */
    data: XOR<CandidateProfileCreateInput, CandidateProfileUncheckedCreateInput>
  }

  /**
   * CandidateProfile createMany
   */
  export type CandidateProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateProfiles.
     */
    data: CandidateProfileCreateManyInput | CandidateProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateProfile createManyAndReturn
   */
  export type CandidateProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CandidateProfiles.
     */
    data: CandidateProfileCreateManyInput | CandidateProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateProfile update
   */
  export type CandidateProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CandidateProfile.
     */
    data: XOR<CandidateProfileUpdateInput, CandidateProfileUncheckedUpdateInput>
    /**
     * Choose, which CandidateProfile to update.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile updateMany
   */
  export type CandidateProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateProfiles.
     */
    data: XOR<CandidateProfileUpdateManyMutationInput, CandidateProfileUncheckedUpdateManyInput>
    /**
     * Filter which CandidateProfiles to update
     */
    where?: CandidateProfileWhereInput
    /**
     * Limit how many CandidateProfiles to update.
     */
    limit?: number
  }

  /**
   * CandidateProfile updateManyAndReturn
   */
  export type CandidateProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * The data used to update CandidateProfiles.
     */
    data: XOR<CandidateProfileUpdateManyMutationInput, CandidateProfileUncheckedUpdateManyInput>
    /**
     * Filter which CandidateProfiles to update
     */
    where?: CandidateProfileWhereInput
    /**
     * Limit how many CandidateProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateProfile upsert
   */
  export type CandidateProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CandidateProfile to update in case it exists.
     */
    where: CandidateProfileWhereUniqueInput
    /**
     * In case the CandidateProfile found by the `where` argument doesn't exist, create a new CandidateProfile with this data.
     */
    create: XOR<CandidateProfileCreateInput, CandidateProfileUncheckedCreateInput>
    /**
     * In case the CandidateProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateProfileUpdateInput, CandidateProfileUncheckedUpdateInput>
  }

  /**
   * CandidateProfile delete
   */
  export type CandidateProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter which CandidateProfile to delete.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile deleteMany
   */
  export type CandidateProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateProfiles to delete
     */
    where?: CandidateProfileWhereInput
    /**
     * Limit how many CandidateProfiles to delete.
     */
    limit?: number
  }

  /**
   * CandidateProfile.candidateLanguage
   */
  export type CandidateProfile$candidateLanguageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    where?: CandidateLanguageWhereInput
    orderBy?: CandidateLanguageOrderByWithRelationInput | CandidateLanguageOrderByWithRelationInput[]
    cursor?: CandidateLanguageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateLanguageScalarFieldEnum | CandidateLanguageScalarFieldEnum[]
  }

  /**
   * CandidateProfile.candidateEducation
   */
  export type CandidateProfile$candidateEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    where?: CandidateEducationWhereInput
    orderBy?: CandidateEducationOrderByWithRelationInput | CandidateEducationOrderByWithRelationInput[]
    cursor?: CandidateEducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateEducationScalarFieldEnum | CandidateEducationScalarFieldEnum[]
  }

  /**
   * CandidateProfile.candidateSkills
   */
  export type CandidateProfile$candidateSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    where?: CandidateSkillWhereInput
    orderBy?: CandidateSkillOrderByWithRelationInput | CandidateSkillOrderByWithRelationInput[]
    cursor?: CandidateSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateSkillScalarFieldEnum | CandidateSkillScalarFieldEnum[]
  }

  /**
   * CandidateProfile without action
   */
  export type CandidateProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
  }


  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageMinAggregateOutputType = {
    name: string | null
  }

  export type LanguageMaxAggregateOutputType = {
    name: string | null
  }

  export type LanguageCountAggregateOutputType = {
    name: number
    _all: number
  }


  export type LanguageMinAggregateInputType = {
    name?: true
  }

  export type LanguageMaxAggregateInputType = {
    name?: true
  }

  export type LanguageCountAggregateInputType = {
    name?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    name: string
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    candidateLanguage?: boolean | Language$candidateLanguageArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectScalar = {
    name?: boolean
  }

  export type LanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name", ExtArgs["result"]["language"]>
  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateLanguage?: boolean | Language$candidateLanguageArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {
      candidateLanguage: Prisma.$CandidateLanguagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const languageWithNameOnly = await prisma.language.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguageCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `name`
     * const languageWithNameOnly = await prisma.language.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages and returns the data updated in the database.
     * @param {LanguageUpdateManyAndReturnArgs} args - Arguments to update many Languages.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Languages and only return the `name`
     * const languageWithNameOnly = await prisma.language.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidateLanguage<T extends Language$candidateLanguageArgs<ExtArgs> = {}>(args?: Subset<T, Language$candidateLanguageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Language model
   */
  interface LanguageFieldRefs {
    readonly name: FieldRef<"Language", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language createManyAndReturn
   */
  export type LanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language updateManyAndReturn
   */
  export type LanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Language.candidateLanguage
   */
  export type Language$candidateLanguageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    where?: CandidateLanguageWhereInput
    orderBy?: CandidateLanguageOrderByWithRelationInput | CandidateLanguageOrderByWithRelationInput[]
    cursor?: CandidateLanguageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateLanguageScalarFieldEnum | CandidateLanguageScalarFieldEnum[]
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }


  /**
   * Model CandidateLanguage
   */

  export type AggregateCandidateLanguage = {
    _count: CandidateLanguageCountAggregateOutputType | null
    _min: CandidateLanguageMinAggregateOutputType | null
    _max: CandidateLanguageMaxAggregateOutputType | null
  }

  export type CandidateLanguageMinAggregateOutputType = {
    candidateProfileId: string | null
    level: $Enums.Level | null
    languageName: string | null
  }

  export type CandidateLanguageMaxAggregateOutputType = {
    candidateProfileId: string | null
    level: $Enums.Level | null
    languageName: string | null
  }

  export type CandidateLanguageCountAggregateOutputType = {
    candidateProfileId: number
    level: number
    languageName: number
    _all: number
  }


  export type CandidateLanguageMinAggregateInputType = {
    candidateProfileId?: true
    level?: true
    languageName?: true
  }

  export type CandidateLanguageMaxAggregateInputType = {
    candidateProfileId?: true
    level?: true
    languageName?: true
  }

  export type CandidateLanguageCountAggregateInputType = {
    candidateProfileId?: true
    level?: true
    languageName?: true
    _all?: true
  }

  export type CandidateLanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateLanguage to aggregate.
     */
    where?: CandidateLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateLanguages to fetch.
     */
    orderBy?: CandidateLanguageOrderByWithRelationInput | CandidateLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidateLanguages
    **/
    _count?: true | CandidateLanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateLanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateLanguageMaxAggregateInputType
  }

  export type GetCandidateLanguageAggregateType<T extends CandidateLanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidateLanguage[P]>
      : GetScalarType<T[P], AggregateCandidateLanguage[P]>
  }




  export type CandidateLanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateLanguageWhereInput
    orderBy?: CandidateLanguageOrderByWithAggregationInput | CandidateLanguageOrderByWithAggregationInput[]
    by: CandidateLanguageScalarFieldEnum[] | CandidateLanguageScalarFieldEnum
    having?: CandidateLanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateLanguageCountAggregateInputType | true
    _min?: CandidateLanguageMinAggregateInputType
    _max?: CandidateLanguageMaxAggregateInputType
  }

  export type CandidateLanguageGroupByOutputType = {
    candidateProfileId: string
    level: $Enums.Level
    languageName: string
    _count: CandidateLanguageCountAggregateOutputType | null
    _min: CandidateLanguageMinAggregateOutputType | null
    _max: CandidateLanguageMaxAggregateOutputType | null
  }

  type GetCandidateLanguageGroupByPayload<T extends CandidateLanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateLanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateLanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateLanguageGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateLanguageGroupByOutputType[P]>
        }
      >
    >


  export type CandidateLanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidateProfileId?: boolean
    level?: boolean
    languageName?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateLanguage"]>

  export type CandidateLanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidateProfileId?: boolean
    level?: boolean
    languageName?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateLanguage"]>

  export type CandidateLanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidateProfileId?: boolean
    level?: boolean
    languageName?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateLanguage"]>

  export type CandidateLanguageSelectScalar = {
    candidateProfileId?: boolean
    level?: boolean
    languageName?: boolean
  }

  export type CandidateLanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"candidateProfileId" | "level" | "languageName", ExtArgs["result"]["candidateLanguage"]>
  export type CandidateLanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type CandidateLanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type CandidateLanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }

  export type $CandidateLanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateLanguage"
    objects: {
      candidateProfile: Prisma.$CandidateProfilePayload<ExtArgs>
      language: Prisma.$LanguagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      candidateProfileId: string
      level: $Enums.Level
      languageName: string
    }, ExtArgs["result"]["candidateLanguage"]>
    composites: {}
  }

  type CandidateLanguageGetPayload<S extends boolean | null | undefined | CandidateLanguageDefaultArgs> = $Result.GetResult<Prisma.$CandidateLanguagePayload, S>

  type CandidateLanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateLanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateLanguageCountAggregateInputType | true
    }

  export interface CandidateLanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidateLanguage'], meta: { name: 'CandidateLanguage' } }
    /**
     * Find zero or one CandidateLanguage that matches the filter.
     * @param {CandidateLanguageFindUniqueArgs} args - Arguments to find a CandidateLanguage
     * @example
     * // Get one CandidateLanguage
     * const candidateLanguage = await prisma.candidateLanguage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateLanguageFindUniqueArgs>(args: SelectSubset<T, CandidateLanguageFindUniqueArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CandidateLanguage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateLanguageFindUniqueOrThrowArgs} args - Arguments to find a CandidateLanguage
     * @example
     * // Get one CandidateLanguage
     * const candidateLanguage = await prisma.candidateLanguage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateLanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateLanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateLanguage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateLanguageFindFirstArgs} args - Arguments to find a CandidateLanguage
     * @example
     * // Get one CandidateLanguage
     * const candidateLanguage = await prisma.candidateLanguage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateLanguageFindFirstArgs>(args?: SelectSubset<T, CandidateLanguageFindFirstArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateLanguage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateLanguageFindFirstOrThrowArgs} args - Arguments to find a CandidateLanguage
     * @example
     * // Get one CandidateLanguage
     * const candidateLanguage = await prisma.candidateLanguage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateLanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateLanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CandidateLanguages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateLanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateLanguages
     * const candidateLanguages = await prisma.candidateLanguage.findMany()
     * 
     * // Get first 10 CandidateLanguages
     * const candidateLanguages = await prisma.candidateLanguage.findMany({ take: 10 })
     * 
     * // Only select the `candidateProfileId`
     * const candidateLanguageWithCandidateProfileIdOnly = await prisma.candidateLanguage.findMany({ select: { candidateProfileId: true } })
     * 
     */
    findMany<T extends CandidateLanguageFindManyArgs>(args?: SelectSubset<T, CandidateLanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CandidateLanguage.
     * @param {CandidateLanguageCreateArgs} args - Arguments to create a CandidateLanguage.
     * @example
     * // Create one CandidateLanguage
     * const CandidateLanguage = await prisma.candidateLanguage.create({
     *   data: {
     *     // ... data to create a CandidateLanguage
     *   }
     * })
     * 
     */
    create<T extends CandidateLanguageCreateArgs>(args: SelectSubset<T, CandidateLanguageCreateArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CandidateLanguages.
     * @param {CandidateLanguageCreateManyArgs} args - Arguments to create many CandidateLanguages.
     * @example
     * // Create many CandidateLanguages
     * const candidateLanguage = await prisma.candidateLanguage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateLanguageCreateManyArgs>(args?: SelectSubset<T, CandidateLanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CandidateLanguages and returns the data saved in the database.
     * @param {CandidateLanguageCreateManyAndReturnArgs} args - Arguments to create many CandidateLanguages.
     * @example
     * // Create many CandidateLanguages
     * const candidateLanguage = await prisma.candidateLanguage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CandidateLanguages and only return the `candidateProfileId`
     * const candidateLanguageWithCandidateProfileIdOnly = await prisma.candidateLanguage.createManyAndReturn({
     *   select: { candidateProfileId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateLanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateLanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CandidateLanguage.
     * @param {CandidateLanguageDeleteArgs} args - Arguments to delete one CandidateLanguage.
     * @example
     * // Delete one CandidateLanguage
     * const CandidateLanguage = await prisma.candidateLanguage.delete({
     *   where: {
     *     // ... filter to delete one CandidateLanguage
     *   }
     * })
     * 
     */
    delete<T extends CandidateLanguageDeleteArgs>(args: SelectSubset<T, CandidateLanguageDeleteArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CandidateLanguage.
     * @param {CandidateLanguageUpdateArgs} args - Arguments to update one CandidateLanguage.
     * @example
     * // Update one CandidateLanguage
     * const candidateLanguage = await prisma.candidateLanguage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateLanguageUpdateArgs>(args: SelectSubset<T, CandidateLanguageUpdateArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CandidateLanguages.
     * @param {CandidateLanguageDeleteManyArgs} args - Arguments to filter CandidateLanguages to delete.
     * @example
     * // Delete a few CandidateLanguages
     * const { count } = await prisma.candidateLanguage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateLanguageDeleteManyArgs>(args?: SelectSubset<T, CandidateLanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateLanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateLanguages
     * const candidateLanguage = await prisma.candidateLanguage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateLanguageUpdateManyArgs>(args: SelectSubset<T, CandidateLanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateLanguages and returns the data updated in the database.
     * @param {CandidateLanguageUpdateManyAndReturnArgs} args - Arguments to update many CandidateLanguages.
     * @example
     * // Update many CandidateLanguages
     * const candidateLanguage = await prisma.candidateLanguage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CandidateLanguages and only return the `candidateProfileId`
     * const candidateLanguageWithCandidateProfileIdOnly = await prisma.candidateLanguage.updateManyAndReturn({
     *   select: { candidateProfileId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateLanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateLanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CandidateLanguage.
     * @param {CandidateLanguageUpsertArgs} args - Arguments to update or create a CandidateLanguage.
     * @example
     * // Update or create a CandidateLanguage
     * const candidateLanguage = await prisma.candidateLanguage.upsert({
     *   create: {
     *     // ... data to create a CandidateLanguage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateLanguage we want to update
     *   }
     * })
     */
    upsert<T extends CandidateLanguageUpsertArgs>(args: SelectSubset<T, CandidateLanguageUpsertArgs<ExtArgs>>): Prisma__CandidateLanguageClient<$Result.GetResult<Prisma.$CandidateLanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CandidateLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateLanguageCountArgs} args - Arguments to filter CandidateLanguages to count.
     * @example
     * // Count the number of CandidateLanguages
     * const count = await prisma.candidateLanguage.count({
     *   where: {
     *     // ... the filter for the CandidateLanguages we want to count
     *   }
     * })
    **/
    count<T extends CandidateLanguageCountArgs>(
      args?: Subset<T, CandidateLanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateLanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidateLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateLanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateLanguageAggregateArgs>(args: Subset<T, CandidateLanguageAggregateArgs>): Prisma.PrismaPromise<GetCandidateLanguageAggregateType<T>>

    /**
     * Group by CandidateLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateLanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateLanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateLanguageGroupByArgs['orderBy'] }
        : { orderBy?: CandidateLanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateLanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidateLanguage model
   */
  readonly fields: CandidateLanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidateLanguage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateLanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidateProfile<T extends CandidateProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfileDefaultArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    language<T extends LanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageDefaultArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CandidateLanguage model
   */
  interface CandidateLanguageFieldRefs {
    readonly candidateProfileId: FieldRef<"CandidateLanguage", 'String'>
    readonly level: FieldRef<"CandidateLanguage", 'Level'>
    readonly languageName: FieldRef<"CandidateLanguage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CandidateLanguage findUnique
   */
  export type CandidateLanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * Filter, which CandidateLanguage to fetch.
     */
    where: CandidateLanguageWhereUniqueInput
  }

  /**
   * CandidateLanguage findUniqueOrThrow
   */
  export type CandidateLanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * Filter, which CandidateLanguage to fetch.
     */
    where: CandidateLanguageWhereUniqueInput
  }

  /**
   * CandidateLanguage findFirst
   */
  export type CandidateLanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * Filter, which CandidateLanguage to fetch.
     */
    where?: CandidateLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateLanguages to fetch.
     */
    orderBy?: CandidateLanguageOrderByWithRelationInput | CandidateLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateLanguages.
     */
    cursor?: CandidateLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateLanguages.
     */
    distinct?: CandidateLanguageScalarFieldEnum | CandidateLanguageScalarFieldEnum[]
  }

  /**
   * CandidateLanguage findFirstOrThrow
   */
  export type CandidateLanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * Filter, which CandidateLanguage to fetch.
     */
    where?: CandidateLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateLanguages to fetch.
     */
    orderBy?: CandidateLanguageOrderByWithRelationInput | CandidateLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateLanguages.
     */
    cursor?: CandidateLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateLanguages.
     */
    distinct?: CandidateLanguageScalarFieldEnum | CandidateLanguageScalarFieldEnum[]
  }

  /**
   * CandidateLanguage findMany
   */
  export type CandidateLanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * Filter, which CandidateLanguages to fetch.
     */
    where?: CandidateLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateLanguages to fetch.
     */
    orderBy?: CandidateLanguageOrderByWithRelationInput | CandidateLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidateLanguages.
     */
    cursor?: CandidateLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateLanguages.
     */
    skip?: number
    distinct?: CandidateLanguageScalarFieldEnum | CandidateLanguageScalarFieldEnum[]
  }

  /**
   * CandidateLanguage create
   */
  export type CandidateLanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a CandidateLanguage.
     */
    data: XOR<CandidateLanguageCreateInput, CandidateLanguageUncheckedCreateInput>
  }

  /**
   * CandidateLanguage createMany
   */
  export type CandidateLanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateLanguages.
     */
    data: CandidateLanguageCreateManyInput | CandidateLanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateLanguage createManyAndReturn
   */
  export type CandidateLanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * The data used to create many CandidateLanguages.
     */
    data: CandidateLanguageCreateManyInput | CandidateLanguageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateLanguage update
   */
  export type CandidateLanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a CandidateLanguage.
     */
    data: XOR<CandidateLanguageUpdateInput, CandidateLanguageUncheckedUpdateInput>
    /**
     * Choose, which CandidateLanguage to update.
     */
    where: CandidateLanguageWhereUniqueInput
  }

  /**
   * CandidateLanguage updateMany
   */
  export type CandidateLanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateLanguages.
     */
    data: XOR<CandidateLanguageUpdateManyMutationInput, CandidateLanguageUncheckedUpdateManyInput>
    /**
     * Filter which CandidateLanguages to update
     */
    where?: CandidateLanguageWhereInput
    /**
     * Limit how many CandidateLanguages to update.
     */
    limit?: number
  }

  /**
   * CandidateLanguage updateManyAndReturn
   */
  export type CandidateLanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * The data used to update CandidateLanguages.
     */
    data: XOR<CandidateLanguageUpdateManyMutationInput, CandidateLanguageUncheckedUpdateManyInput>
    /**
     * Filter which CandidateLanguages to update
     */
    where?: CandidateLanguageWhereInput
    /**
     * Limit how many CandidateLanguages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateLanguage upsert
   */
  export type CandidateLanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the CandidateLanguage to update in case it exists.
     */
    where: CandidateLanguageWhereUniqueInput
    /**
     * In case the CandidateLanguage found by the `where` argument doesn't exist, create a new CandidateLanguage with this data.
     */
    create: XOR<CandidateLanguageCreateInput, CandidateLanguageUncheckedCreateInput>
    /**
     * In case the CandidateLanguage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateLanguageUpdateInput, CandidateLanguageUncheckedUpdateInput>
  }

  /**
   * CandidateLanguage delete
   */
  export type CandidateLanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
    /**
     * Filter which CandidateLanguage to delete.
     */
    where: CandidateLanguageWhereUniqueInput
  }

  /**
   * CandidateLanguage deleteMany
   */
  export type CandidateLanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateLanguages to delete
     */
    where?: CandidateLanguageWhereInput
    /**
     * Limit how many CandidateLanguages to delete.
     */
    limit?: number
  }

  /**
   * CandidateLanguage without action
   */
  export type CandidateLanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateLanguage
     */
    select?: CandidateLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateLanguage
     */
    omit?: CandidateLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateLanguageInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    name: string | null
    map: string | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    map: string | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    name: number
    map: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    name?: true
    map?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    name?: true
    map?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    name?: true
    map?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: string
    name: string
    map: string
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    map?: boolean
    candidateEducation?: boolean | Education$candidateEducationArgs<ExtArgs>
    _count?: boolean | EducationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    map?: boolean
  }, ExtArgs["result"]["education"]>

  export type EducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    map?: boolean
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    name?: boolean
    map?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "map", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateEducation?: boolean | Education$candidateEducationArgs<ExtArgs>
    _count?: boolean | EducationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      candidateEducation: Prisma.$CandidateEducationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      map: string
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {EducationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EducationUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidateEducation<T extends Education$candidateEducationArgs<ExtArgs> = {}>(args?: Subset<T, Education$candidateEducationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'String'>
    readonly name: FieldRef<"Education", 'String'>
    readonly map: FieldRef<"Education", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education updateManyAndReturn
   */
  export type EducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education.candidateEducation
   */
  export type Education$candidateEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    where?: CandidateEducationWhereInput
    orderBy?: CandidateEducationOrderByWithRelationInput | CandidateEducationOrderByWithRelationInput[]
    cursor?: CandidateEducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateEducationScalarFieldEnum | CandidateEducationScalarFieldEnum[]
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model CandidateEducation
   */

  export type AggregateCandidateEducation = {
    _count: CandidateEducationCountAggregateOutputType | null
    _min: CandidateEducationMinAggregateOutputType | null
    _max: CandidateEducationMaxAggregateOutputType | null
  }

  export type CandidateEducationMinAggregateOutputType = {
    candidateProfileId: string | null
    educationId: string | null
    major: string | null
    degree: $Enums.DEGREE | null
    startYear: Date | null
    endYear: Date | null
  }

  export type CandidateEducationMaxAggregateOutputType = {
    candidateProfileId: string | null
    educationId: string | null
    major: string | null
    degree: $Enums.DEGREE | null
    startYear: Date | null
    endYear: Date | null
  }

  export type CandidateEducationCountAggregateOutputType = {
    candidateProfileId: number
    educationId: number
    major: number
    degree: number
    startYear: number
    endYear: number
    _all: number
  }


  export type CandidateEducationMinAggregateInputType = {
    candidateProfileId?: true
    educationId?: true
    major?: true
    degree?: true
    startYear?: true
    endYear?: true
  }

  export type CandidateEducationMaxAggregateInputType = {
    candidateProfileId?: true
    educationId?: true
    major?: true
    degree?: true
    startYear?: true
    endYear?: true
  }

  export type CandidateEducationCountAggregateInputType = {
    candidateProfileId?: true
    educationId?: true
    major?: true
    degree?: true
    startYear?: true
    endYear?: true
    _all?: true
  }

  export type CandidateEducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateEducation to aggregate.
     */
    where?: CandidateEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateEducations to fetch.
     */
    orderBy?: CandidateEducationOrderByWithRelationInput | CandidateEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidateEducations
    **/
    _count?: true | CandidateEducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateEducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateEducationMaxAggregateInputType
  }

  export type GetCandidateEducationAggregateType<T extends CandidateEducationAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidateEducation[P]>
      : GetScalarType<T[P], AggregateCandidateEducation[P]>
  }




  export type CandidateEducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateEducationWhereInput
    orderBy?: CandidateEducationOrderByWithAggregationInput | CandidateEducationOrderByWithAggregationInput[]
    by: CandidateEducationScalarFieldEnum[] | CandidateEducationScalarFieldEnum
    having?: CandidateEducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateEducationCountAggregateInputType | true
    _min?: CandidateEducationMinAggregateInputType
    _max?: CandidateEducationMaxAggregateInputType
  }

  export type CandidateEducationGroupByOutputType = {
    candidateProfileId: string
    educationId: string
    major: string
    degree: $Enums.DEGREE
    startYear: Date
    endYear: Date
    _count: CandidateEducationCountAggregateOutputType | null
    _min: CandidateEducationMinAggregateOutputType | null
    _max: CandidateEducationMaxAggregateOutputType | null
  }

  type GetCandidateEducationGroupByPayload<T extends CandidateEducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateEducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateEducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateEducationGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateEducationGroupByOutputType[P]>
        }
      >
    >


  export type CandidateEducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidateProfileId?: boolean
    educationId?: boolean
    major?: boolean
    degree?: boolean
    startYear?: boolean
    endYear?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateEducation"]>

  export type CandidateEducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidateProfileId?: boolean
    educationId?: boolean
    major?: boolean
    degree?: boolean
    startYear?: boolean
    endYear?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateEducation"]>

  export type CandidateEducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidateProfileId?: boolean
    educationId?: boolean
    major?: boolean
    degree?: boolean
    startYear?: boolean
    endYear?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateEducation"]>

  export type CandidateEducationSelectScalar = {
    candidateProfileId?: boolean
    educationId?: boolean
    major?: boolean
    degree?: boolean
    startYear?: boolean
    endYear?: boolean
  }

  export type CandidateEducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"candidateProfileId" | "educationId" | "major" | "degree" | "startYear" | "endYear", ExtArgs["result"]["candidateEducation"]>
  export type CandidateEducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }
  export type CandidateEducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }
  export type CandidateEducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    education?: boolean | EducationDefaultArgs<ExtArgs>
  }

  export type $CandidateEducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateEducation"
    objects: {
      candidateProfile: Prisma.$CandidateProfilePayload<ExtArgs>
      education: Prisma.$EducationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      candidateProfileId: string
      educationId: string
      major: string
      degree: $Enums.DEGREE
      startYear: Date
      endYear: Date
    }, ExtArgs["result"]["candidateEducation"]>
    composites: {}
  }

  type CandidateEducationGetPayload<S extends boolean | null | undefined | CandidateEducationDefaultArgs> = $Result.GetResult<Prisma.$CandidateEducationPayload, S>

  type CandidateEducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateEducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateEducationCountAggregateInputType | true
    }

  export interface CandidateEducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidateEducation'], meta: { name: 'CandidateEducation' } }
    /**
     * Find zero or one CandidateEducation that matches the filter.
     * @param {CandidateEducationFindUniqueArgs} args - Arguments to find a CandidateEducation
     * @example
     * // Get one CandidateEducation
     * const candidateEducation = await prisma.candidateEducation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateEducationFindUniqueArgs>(args: SelectSubset<T, CandidateEducationFindUniqueArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CandidateEducation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateEducationFindUniqueOrThrowArgs} args - Arguments to find a CandidateEducation
     * @example
     * // Get one CandidateEducation
     * const candidateEducation = await prisma.candidateEducation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateEducationFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateEducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateEducation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateEducationFindFirstArgs} args - Arguments to find a CandidateEducation
     * @example
     * // Get one CandidateEducation
     * const candidateEducation = await prisma.candidateEducation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateEducationFindFirstArgs>(args?: SelectSubset<T, CandidateEducationFindFirstArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateEducation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateEducationFindFirstOrThrowArgs} args - Arguments to find a CandidateEducation
     * @example
     * // Get one CandidateEducation
     * const candidateEducation = await prisma.candidateEducation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateEducationFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateEducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CandidateEducations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateEducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateEducations
     * const candidateEducations = await prisma.candidateEducation.findMany()
     * 
     * // Get first 10 CandidateEducations
     * const candidateEducations = await prisma.candidateEducation.findMany({ take: 10 })
     * 
     * // Only select the `candidateProfileId`
     * const candidateEducationWithCandidateProfileIdOnly = await prisma.candidateEducation.findMany({ select: { candidateProfileId: true } })
     * 
     */
    findMany<T extends CandidateEducationFindManyArgs>(args?: SelectSubset<T, CandidateEducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CandidateEducation.
     * @param {CandidateEducationCreateArgs} args - Arguments to create a CandidateEducation.
     * @example
     * // Create one CandidateEducation
     * const CandidateEducation = await prisma.candidateEducation.create({
     *   data: {
     *     // ... data to create a CandidateEducation
     *   }
     * })
     * 
     */
    create<T extends CandidateEducationCreateArgs>(args: SelectSubset<T, CandidateEducationCreateArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CandidateEducations.
     * @param {CandidateEducationCreateManyArgs} args - Arguments to create many CandidateEducations.
     * @example
     * // Create many CandidateEducations
     * const candidateEducation = await prisma.candidateEducation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateEducationCreateManyArgs>(args?: SelectSubset<T, CandidateEducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CandidateEducations and returns the data saved in the database.
     * @param {CandidateEducationCreateManyAndReturnArgs} args - Arguments to create many CandidateEducations.
     * @example
     * // Create many CandidateEducations
     * const candidateEducation = await prisma.candidateEducation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CandidateEducations and only return the `candidateProfileId`
     * const candidateEducationWithCandidateProfileIdOnly = await prisma.candidateEducation.createManyAndReturn({
     *   select: { candidateProfileId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateEducationCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateEducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CandidateEducation.
     * @param {CandidateEducationDeleteArgs} args - Arguments to delete one CandidateEducation.
     * @example
     * // Delete one CandidateEducation
     * const CandidateEducation = await prisma.candidateEducation.delete({
     *   where: {
     *     // ... filter to delete one CandidateEducation
     *   }
     * })
     * 
     */
    delete<T extends CandidateEducationDeleteArgs>(args: SelectSubset<T, CandidateEducationDeleteArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CandidateEducation.
     * @param {CandidateEducationUpdateArgs} args - Arguments to update one CandidateEducation.
     * @example
     * // Update one CandidateEducation
     * const candidateEducation = await prisma.candidateEducation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateEducationUpdateArgs>(args: SelectSubset<T, CandidateEducationUpdateArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CandidateEducations.
     * @param {CandidateEducationDeleteManyArgs} args - Arguments to filter CandidateEducations to delete.
     * @example
     * // Delete a few CandidateEducations
     * const { count } = await prisma.candidateEducation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateEducationDeleteManyArgs>(args?: SelectSubset<T, CandidateEducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateEducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateEducations
     * const candidateEducation = await prisma.candidateEducation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateEducationUpdateManyArgs>(args: SelectSubset<T, CandidateEducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateEducations and returns the data updated in the database.
     * @param {CandidateEducationUpdateManyAndReturnArgs} args - Arguments to update many CandidateEducations.
     * @example
     * // Update many CandidateEducations
     * const candidateEducation = await prisma.candidateEducation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CandidateEducations and only return the `candidateProfileId`
     * const candidateEducationWithCandidateProfileIdOnly = await prisma.candidateEducation.updateManyAndReturn({
     *   select: { candidateProfileId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateEducationUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateEducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CandidateEducation.
     * @param {CandidateEducationUpsertArgs} args - Arguments to update or create a CandidateEducation.
     * @example
     * // Update or create a CandidateEducation
     * const candidateEducation = await prisma.candidateEducation.upsert({
     *   create: {
     *     // ... data to create a CandidateEducation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateEducation we want to update
     *   }
     * })
     */
    upsert<T extends CandidateEducationUpsertArgs>(args: SelectSubset<T, CandidateEducationUpsertArgs<ExtArgs>>): Prisma__CandidateEducationClient<$Result.GetResult<Prisma.$CandidateEducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CandidateEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateEducationCountArgs} args - Arguments to filter CandidateEducations to count.
     * @example
     * // Count the number of CandidateEducations
     * const count = await prisma.candidateEducation.count({
     *   where: {
     *     // ... the filter for the CandidateEducations we want to count
     *   }
     * })
    **/
    count<T extends CandidateEducationCountArgs>(
      args?: Subset<T, CandidateEducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateEducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidateEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateEducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateEducationAggregateArgs>(args: Subset<T, CandidateEducationAggregateArgs>): Prisma.PrismaPromise<GetCandidateEducationAggregateType<T>>

    /**
     * Group by CandidateEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateEducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateEducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateEducationGroupByArgs['orderBy'] }
        : { orderBy?: CandidateEducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateEducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidateEducation model
   */
  readonly fields: CandidateEducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidateEducation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateEducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidateProfile<T extends CandidateProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfileDefaultArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    education<T extends EducationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EducationDefaultArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CandidateEducation model
   */
  interface CandidateEducationFieldRefs {
    readonly candidateProfileId: FieldRef<"CandidateEducation", 'String'>
    readonly educationId: FieldRef<"CandidateEducation", 'String'>
    readonly major: FieldRef<"CandidateEducation", 'String'>
    readonly degree: FieldRef<"CandidateEducation", 'DEGREE'>
    readonly startYear: FieldRef<"CandidateEducation", 'DateTime'>
    readonly endYear: FieldRef<"CandidateEducation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CandidateEducation findUnique
   */
  export type CandidateEducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * Filter, which CandidateEducation to fetch.
     */
    where: CandidateEducationWhereUniqueInput
  }

  /**
   * CandidateEducation findUniqueOrThrow
   */
  export type CandidateEducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * Filter, which CandidateEducation to fetch.
     */
    where: CandidateEducationWhereUniqueInput
  }

  /**
   * CandidateEducation findFirst
   */
  export type CandidateEducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * Filter, which CandidateEducation to fetch.
     */
    where?: CandidateEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateEducations to fetch.
     */
    orderBy?: CandidateEducationOrderByWithRelationInput | CandidateEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateEducations.
     */
    cursor?: CandidateEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateEducations.
     */
    distinct?: CandidateEducationScalarFieldEnum | CandidateEducationScalarFieldEnum[]
  }

  /**
   * CandidateEducation findFirstOrThrow
   */
  export type CandidateEducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * Filter, which CandidateEducation to fetch.
     */
    where?: CandidateEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateEducations to fetch.
     */
    orderBy?: CandidateEducationOrderByWithRelationInput | CandidateEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateEducations.
     */
    cursor?: CandidateEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateEducations.
     */
    distinct?: CandidateEducationScalarFieldEnum | CandidateEducationScalarFieldEnum[]
  }

  /**
   * CandidateEducation findMany
   */
  export type CandidateEducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * Filter, which CandidateEducations to fetch.
     */
    where?: CandidateEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateEducations to fetch.
     */
    orderBy?: CandidateEducationOrderByWithRelationInput | CandidateEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidateEducations.
     */
    cursor?: CandidateEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateEducations.
     */
    skip?: number
    distinct?: CandidateEducationScalarFieldEnum | CandidateEducationScalarFieldEnum[]
  }

  /**
   * CandidateEducation create
   */
  export type CandidateEducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * The data needed to create a CandidateEducation.
     */
    data: XOR<CandidateEducationCreateInput, CandidateEducationUncheckedCreateInput>
  }

  /**
   * CandidateEducation createMany
   */
  export type CandidateEducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateEducations.
     */
    data: CandidateEducationCreateManyInput | CandidateEducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateEducation createManyAndReturn
   */
  export type CandidateEducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * The data used to create many CandidateEducations.
     */
    data: CandidateEducationCreateManyInput | CandidateEducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateEducation update
   */
  export type CandidateEducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * The data needed to update a CandidateEducation.
     */
    data: XOR<CandidateEducationUpdateInput, CandidateEducationUncheckedUpdateInput>
    /**
     * Choose, which CandidateEducation to update.
     */
    where: CandidateEducationWhereUniqueInput
  }

  /**
   * CandidateEducation updateMany
   */
  export type CandidateEducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateEducations.
     */
    data: XOR<CandidateEducationUpdateManyMutationInput, CandidateEducationUncheckedUpdateManyInput>
    /**
     * Filter which CandidateEducations to update
     */
    where?: CandidateEducationWhereInput
    /**
     * Limit how many CandidateEducations to update.
     */
    limit?: number
  }

  /**
   * CandidateEducation updateManyAndReturn
   */
  export type CandidateEducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * The data used to update CandidateEducations.
     */
    data: XOR<CandidateEducationUpdateManyMutationInput, CandidateEducationUncheckedUpdateManyInput>
    /**
     * Filter which CandidateEducations to update
     */
    where?: CandidateEducationWhereInput
    /**
     * Limit how many CandidateEducations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateEducation upsert
   */
  export type CandidateEducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * The filter to search for the CandidateEducation to update in case it exists.
     */
    where: CandidateEducationWhereUniqueInput
    /**
     * In case the CandidateEducation found by the `where` argument doesn't exist, create a new CandidateEducation with this data.
     */
    create: XOR<CandidateEducationCreateInput, CandidateEducationUncheckedCreateInput>
    /**
     * In case the CandidateEducation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateEducationUpdateInput, CandidateEducationUncheckedUpdateInput>
  }

  /**
   * CandidateEducation delete
   */
  export type CandidateEducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
    /**
     * Filter which CandidateEducation to delete.
     */
    where: CandidateEducationWhereUniqueInput
  }

  /**
   * CandidateEducation deleteMany
   */
  export type CandidateEducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateEducations to delete
     */
    where?: CandidateEducationWhereInput
    /**
     * Limit how many CandidateEducations to delete.
     */
    limit?: number
  }

  /**
   * CandidateEducation without action
   */
  export type CandidateEducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateEducation
     */
    select?: CandidateEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateEducation
     */
    omit?: CandidateEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateEducationInclude<ExtArgs> | null
  }


  /**
   * Model skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    name: string | null
  }

  export type SkillMaxAggregateOutputType = {
    name: string | null
  }

  export type SkillCountAggregateOutputType = {
    name: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    name?: true
  }

  export type SkillMaxAggregateInputType = {
    name?: true
  }

  export type SkillCountAggregateInputType = {
    name?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skill to aggregate.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type skillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillWhereInput
    orderBy?: skillOrderByWithAggregationInput | skillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: skillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    name: string
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends skillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type skillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    candidateSkills?: boolean | skill$candidateSkillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type skillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["skill"]>

  export type skillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["skill"]>

  export type skillSelectScalar = {
    name?: boolean
  }

  export type skillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name", ExtArgs["result"]["skill"]>
  export type skillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateSkills?: boolean | skill$candidateSkillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type skillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type skillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $skillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skill"
    objects: {
      candidateSkills: Prisma.$CandidateSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type skillGetPayload<S extends boolean | null | undefined | skillDefaultArgs> = $Result.GetResult<Prisma.$skillPayload, S>

  type skillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface skillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skill'], meta: { name: 'skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {skillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillFindUniqueArgs>(args: SelectSubset<T, skillFindUniqueArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillFindUniqueOrThrowArgs>(args: SelectSubset<T, skillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillFindFirstArgs>(args?: SelectSubset<T, skillFindFirstArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillFindFirstOrThrowArgs>(args?: SelectSubset<T, skillFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const skillWithNameOnly = await prisma.skill.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends skillFindManyArgs>(args?: SelectSubset<T, skillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {skillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends skillCreateArgs>(args: SelectSubset<T, skillCreateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {skillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skillCreateManyArgs>(args?: SelectSubset<T, skillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {skillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `name`
     * const skillWithNameOnly = await prisma.skill.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends skillCreateManyAndReturnArgs>(args?: SelectSubset<T, skillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {skillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends skillDeleteArgs>(args: SelectSubset<T, skillDeleteArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {skillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skillUpdateArgs>(args: SelectSubset<T, skillUpdateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {skillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skillDeleteManyArgs>(args?: SelectSubset<T, skillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skillUpdateManyArgs>(args: SelectSubset<T, skillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {skillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `name`
     * const skillWithNameOnly = await prisma.skill.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends skillUpdateManyAndReturnArgs>(args: SelectSubset<T, skillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {skillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends skillUpsertArgs>(args: SelectSubset<T, skillUpsertArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends skillCountArgs>(
      args?: Subset<T, skillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends skillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillGroupByArgs['orderBy'] }
        : { orderBy?: skillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, skillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skill model
   */
  readonly fields: skillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidateSkills<T extends skill$candidateSkillsArgs<ExtArgs> = {}>(args?: Subset<T, skill$candidateSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the skill model
   */
  interface skillFieldRefs {
    readonly name: FieldRef<"skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * skill findUnique
   */
  export type skillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findUniqueOrThrow
   */
  export type skillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findFirst
   */
  export type skillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findFirstOrThrow
   */
  export type skillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findMany
   */
  export type skillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill create
   */
  export type skillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The data needed to create a skill.
     */
    data: XOR<skillCreateInput, skillUncheckedCreateInput>
  }

  /**
   * skill createMany
   */
  export type skillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skills.
     */
    data: skillCreateManyInput | skillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skill createManyAndReturn
   */
  export type skillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * The data used to create many skills.
     */
    data: skillCreateManyInput | skillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skill update
   */
  export type skillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The data needed to update a skill.
     */
    data: XOR<skillUpdateInput, skillUncheckedUpdateInput>
    /**
     * Choose, which skill to update.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill updateMany
   */
  export type skillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skills.
     */
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
  }

  /**
   * skill updateManyAndReturn
   */
  export type skillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * The data used to update skills.
     */
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
  }

  /**
   * skill upsert
   */
  export type skillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The filter to search for the skill to update in case it exists.
     */
    where: skillWhereUniqueInput
    /**
     * In case the skill found by the `where` argument doesn't exist, create a new skill with this data.
     */
    create: XOR<skillCreateInput, skillUncheckedCreateInput>
    /**
     * In case the skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillUpdateInput, skillUncheckedUpdateInput>
  }

  /**
   * skill delete
   */
  export type skillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter which skill to delete.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill deleteMany
   */
  export type skillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to delete
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to delete.
     */
    limit?: number
  }

  /**
   * skill.candidateSkills
   */
  export type skill$candidateSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    where?: CandidateSkillWhereInput
    orderBy?: CandidateSkillOrderByWithRelationInput | CandidateSkillOrderByWithRelationInput[]
    cursor?: CandidateSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateSkillScalarFieldEnum | CandidateSkillScalarFieldEnum[]
  }

  /**
   * skill without action
   */
  export type skillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
  }


  /**
   * Model CandidateSkill
   */

  export type AggregateCandidateSkill = {
    _count: CandidateSkillCountAggregateOutputType | null
    _min: CandidateSkillMinAggregateOutputType | null
    _max: CandidateSkillMaxAggregateOutputType | null
  }

  export type CandidateSkillMinAggregateOutputType = {
    candidateProfileId: string | null
    skillName: string | null
  }

  export type CandidateSkillMaxAggregateOutputType = {
    candidateProfileId: string | null
    skillName: string | null
  }

  export type CandidateSkillCountAggregateOutputType = {
    candidateProfileId: number
    skillName: number
    _all: number
  }


  export type CandidateSkillMinAggregateInputType = {
    candidateProfileId?: true
    skillName?: true
  }

  export type CandidateSkillMaxAggregateInputType = {
    candidateProfileId?: true
    skillName?: true
  }

  export type CandidateSkillCountAggregateInputType = {
    candidateProfileId?: true
    skillName?: true
    _all?: true
  }

  export type CandidateSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateSkill to aggregate.
     */
    where?: CandidateSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateSkills to fetch.
     */
    orderBy?: CandidateSkillOrderByWithRelationInput | CandidateSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidateSkills
    **/
    _count?: true | CandidateSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateSkillMaxAggregateInputType
  }

  export type GetCandidateSkillAggregateType<T extends CandidateSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidateSkill[P]>
      : GetScalarType<T[P], AggregateCandidateSkill[P]>
  }




  export type CandidateSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateSkillWhereInput
    orderBy?: CandidateSkillOrderByWithAggregationInput | CandidateSkillOrderByWithAggregationInput[]
    by: CandidateSkillScalarFieldEnum[] | CandidateSkillScalarFieldEnum
    having?: CandidateSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateSkillCountAggregateInputType | true
    _min?: CandidateSkillMinAggregateInputType
    _max?: CandidateSkillMaxAggregateInputType
  }

  export type CandidateSkillGroupByOutputType = {
    candidateProfileId: string
    skillName: string
    _count: CandidateSkillCountAggregateOutputType | null
    _min: CandidateSkillMinAggregateOutputType | null
    _max: CandidateSkillMaxAggregateOutputType | null
  }

  type GetCandidateSkillGroupByPayload<T extends CandidateSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateSkillGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateSkillGroupByOutputType[P]>
        }
      >
    >


  export type CandidateSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidateProfileId?: boolean
    skillName?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateSkill"]>

  export type CandidateSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidateProfileId?: boolean
    skillName?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateSkill"]>

  export type CandidateSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidateProfileId?: boolean
    skillName?: boolean
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateSkill"]>

  export type CandidateSkillSelectScalar = {
    candidateProfileId?: boolean
    skillName?: boolean
  }

  export type CandidateSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"candidateProfileId" | "skillName", ExtArgs["result"]["candidateSkill"]>
  export type CandidateSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }
  export type CandidateSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }
  export type CandidateSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidateProfile?: boolean | CandidateProfileDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }

  export type $CandidateSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateSkill"
    objects: {
      candidateProfile: Prisma.$CandidateProfilePayload<ExtArgs>
      skill: Prisma.$skillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      candidateProfileId: string
      skillName: string
    }, ExtArgs["result"]["candidateSkill"]>
    composites: {}
  }

  type CandidateSkillGetPayload<S extends boolean | null | undefined | CandidateSkillDefaultArgs> = $Result.GetResult<Prisma.$CandidateSkillPayload, S>

  type CandidateSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateSkillCountAggregateInputType | true
    }

  export interface CandidateSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidateSkill'], meta: { name: 'CandidateSkill' } }
    /**
     * Find zero or one CandidateSkill that matches the filter.
     * @param {CandidateSkillFindUniqueArgs} args - Arguments to find a CandidateSkill
     * @example
     * // Get one CandidateSkill
     * const candidateSkill = await prisma.candidateSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateSkillFindUniqueArgs>(args: SelectSubset<T, CandidateSkillFindUniqueArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CandidateSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateSkillFindUniqueOrThrowArgs} args - Arguments to find a CandidateSkill
     * @example
     * // Get one CandidateSkill
     * const candidateSkill = await prisma.candidateSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateSkillFindFirstArgs} args - Arguments to find a CandidateSkill
     * @example
     * // Get one CandidateSkill
     * const candidateSkill = await prisma.candidateSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateSkillFindFirstArgs>(args?: SelectSubset<T, CandidateSkillFindFirstArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateSkillFindFirstOrThrowArgs} args - Arguments to find a CandidateSkill
     * @example
     * // Get one CandidateSkill
     * const candidateSkill = await prisma.candidateSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CandidateSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateSkills
     * const candidateSkills = await prisma.candidateSkill.findMany()
     * 
     * // Get first 10 CandidateSkills
     * const candidateSkills = await prisma.candidateSkill.findMany({ take: 10 })
     * 
     * // Only select the `candidateProfileId`
     * const candidateSkillWithCandidateProfileIdOnly = await prisma.candidateSkill.findMany({ select: { candidateProfileId: true } })
     * 
     */
    findMany<T extends CandidateSkillFindManyArgs>(args?: SelectSubset<T, CandidateSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CandidateSkill.
     * @param {CandidateSkillCreateArgs} args - Arguments to create a CandidateSkill.
     * @example
     * // Create one CandidateSkill
     * const CandidateSkill = await prisma.candidateSkill.create({
     *   data: {
     *     // ... data to create a CandidateSkill
     *   }
     * })
     * 
     */
    create<T extends CandidateSkillCreateArgs>(args: SelectSubset<T, CandidateSkillCreateArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CandidateSkills.
     * @param {CandidateSkillCreateManyArgs} args - Arguments to create many CandidateSkills.
     * @example
     * // Create many CandidateSkills
     * const candidateSkill = await prisma.candidateSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateSkillCreateManyArgs>(args?: SelectSubset<T, CandidateSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CandidateSkills and returns the data saved in the database.
     * @param {CandidateSkillCreateManyAndReturnArgs} args - Arguments to create many CandidateSkills.
     * @example
     * // Create many CandidateSkills
     * const candidateSkill = await prisma.candidateSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CandidateSkills and only return the `candidateProfileId`
     * const candidateSkillWithCandidateProfileIdOnly = await prisma.candidateSkill.createManyAndReturn({
     *   select: { candidateProfileId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CandidateSkill.
     * @param {CandidateSkillDeleteArgs} args - Arguments to delete one CandidateSkill.
     * @example
     * // Delete one CandidateSkill
     * const CandidateSkill = await prisma.candidateSkill.delete({
     *   where: {
     *     // ... filter to delete one CandidateSkill
     *   }
     * })
     * 
     */
    delete<T extends CandidateSkillDeleteArgs>(args: SelectSubset<T, CandidateSkillDeleteArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CandidateSkill.
     * @param {CandidateSkillUpdateArgs} args - Arguments to update one CandidateSkill.
     * @example
     * // Update one CandidateSkill
     * const candidateSkill = await prisma.candidateSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateSkillUpdateArgs>(args: SelectSubset<T, CandidateSkillUpdateArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CandidateSkills.
     * @param {CandidateSkillDeleteManyArgs} args - Arguments to filter CandidateSkills to delete.
     * @example
     * // Delete a few CandidateSkills
     * const { count } = await prisma.candidateSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateSkillDeleteManyArgs>(args?: SelectSubset<T, CandidateSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateSkills
     * const candidateSkill = await prisma.candidateSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateSkillUpdateManyArgs>(args: SelectSubset<T, CandidateSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateSkills and returns the data updated in the database.
     * @param {CandidateSkillUpdateManyAndReturnArgs} args - Arguments to update many CandidateSkills.
     * @example
     * // Update many CandidateSkills
     * const candidateSkill = await prisma.candidateSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CandidateSkills and only return the `candidateProfileId`
     * const candidateSkillWithCandidateProfileIdOnly = await prisma.candidateSkill.updateManyAndReturn({
     *   select: { candidateProfileId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CandidateSkill.
     * @param {CandidateSkillUpsertArgs} args - Arguments to update or create a CandidateSkill.
     * @example
     * // Update or create a CandidateSkill
     * const candidateSkill = await prisma.candidateSkill.upsert({
     *   create: {
     *     // ... data to create a CandidateSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateSkill we want to update
     *   }
     * })
     */
    upsert<T extends CandidateSkillUpsertArgs>(args: SelectSubset<T, CandidateSkillUpsertArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CandidateSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateSkillCountArgs} args - Arguments to filter CandidateSkills to count.
     * @example
     * // Count the number of CandidateSkills
     * const count = await prisma.candidateSkill.count({
     *   where: {
     *     // ... the filter for the CandidateSkills we want to count
     *   }
     * })
    **/
    count<T extends CandidateSkillCountArgs>(
      args?: Subset<T, CandidateSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidateSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateSkillAggregateArgs>(args: Subset<T, CandidateSkillAggregateArgs>): Prisma.PrismaPromise<GetCandidateSkillAggregateType<T>>

    /**
     * Group by CandidateSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateSkillGroupByArgs['orderBy'] }
        : { orderBy?: CandidateSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidateSkill model
   */
  readonly fields: CandidateSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidateSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidateProfile<T extends CandidateProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfileDefaultArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends skillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, skillDefaultArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CandidateSkill model
   */
  interface CandidateSkillFieldRefs {
    readonly candidateProfileId: FieldRef<"CandidateSkill", 'String'>
    readonly skillName: FieldRef<"CandidateSkill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CandidateSkill findUnique
   */
  export type CandidateSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * Filter, which CandidateSkill to fetch.
     */
    where: CandidateSkillWhereUniqueInput
  }

  /**
   * CandidateSkill findUniqueOrThrow
   */
  export type CandidateSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * Filter, which CandidateSkill to fetch.
     */
    where: CandidateSkillWhereUniqueInput
  }

  /**
   * CandidateSkill findFirst
   */
  export type CandidateSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * Filter, which CandidateSkill to fetch.
     */
    where?: CandidateSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateSkills to fetch.
     */
    orderBy?: CandidateSkillOrderByWithRelationInput | CandidateSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateSkills.
     */
    cursor?: CandidateSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateSkills.
     */
    distinct?: CandidateSkillScalarFieldEnum | CandidateSkillScalarFieldEnum[]
  }

  /**
   * CandidateSkill findFirstOrThrow
   */
  export type CandidateSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * Filter, which CandidateSkill to fetch.
     */
    where?: CandidateSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateSkills to fetch.
     */
    orderBy?: CandidateSkillOrderByWithRelationInput | CandidateSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateSkills.
     */
    cursor?: CandidateSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateSkills.
     */
    distinct?: CandidateSkillScalarFieldEnum | CandidateSkillScalarFieldEnum[]
  }

  /**
   * CandidateSkill findMany
   */
  export type CandidateSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * Filter, which CandidateSkills to fetch.
     */
    where?: CandidateSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateSkills to fetch.
     */
    orderBy?: CandidateSkillOrderByWithRelationInput | CandidateSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidateSkills.
     */
    cursor?: CandidateSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateSkills.
     */
    skip?: number
    distinct?: CandidateSkillScalarFieldEnum | CandidateSkillScalarFieldEnum[]
  }

  /**
   * CandidateSkill create
   */
  export type CandidateSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a CandidateSkill.
     */
    data: XOR<CandidateSkillCreateInput, CandidateSkillUncheckedCreateInput>
  }

  /**
   * CandidateSkill createMany
   */
  export type CandidateSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateSkills.
     */
    data: CandidateSkillCreateManyInput | CandidateSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateSkill createManyAndReturn
   */
  export type CandidateSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * The data used to create many CandidateSkills.
     */
    data: CandidateSkillCreateManyInput | CandidateSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateSkill update
   */
  export type CandidateSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a CandidateSkill.
     */
    data: XOR<CandidateSkillUpdateInput, CandidateSkillUncheckedUpdateInput>
    /**
     * Choose, which CandidateSkill to update.
     */
    where: CandidateSkillWhereUniqueInput
  }

  /**
   * CandidateSkill updateMany
   */
  export type CandidateSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateSkills.
     */
    data: XOR<CandidateSkillUpdateManyMutationInput, CandidateSkillUncheckedUpdateManyInput>
    /**
     * Filter which CandidateSkills to update
     */
    where?: CandidateSkillWhereInput
    /**
     * Limit how many CandidateSkills to update.
     */
    limit?: number
  }

  /**
   * CandidateSkill updateManyAndReturn
   */
  export type CandidateSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * The data used to update CandidateSkills.
     */
    data: XOR<CandidateSkillUpdateManyMutationInput, CandidateSkillUncheckedUpdateManyInput>
    /**
     * Filter which CandidateSkills to update
     */
    where?: CandidateSkillWhereInput
    /**
     * Limit how many CandidateSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateSkill upsert
   */
  export type CandidateSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the CandidateSkill to update in case it exists.
     */
    where: CandidateSkillWhereUniqueInput
    /**
     * In case the CandidateSkill found by the `where` argument doesn't exist, create a new CandidateSkill with this data.
     */
    create: XOR<CandidateSkillCreateInput, CandidateSkillUncheckedCreateInput>
    /**
     * In case the CandidateSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateSkillUpdateInput, CandidateSkillUncheckedUpdateInput>
  }

  /**
   * CandidateSkill delete
   */
  export type CandidateSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * Filter which CandidateSkill to delete.
     */
    where: CandidateSkillWhereUniqueInput
  }

  /**
   * CandidateSkill deleteMany
   */
  export type CandidateSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateSkills to delete
     */
    where?: CandidateSkillWhereInput
    /**
     * Limit how many CandidateSkills to delete.
     */
    limit?: number
  }

  /**
   * CandidateSkill without action
   */
  export type CandidateSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    status: 'status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CandidateProfileScalarFieldEnum: {
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

  export type CandidateProfileScalarFieldEnum = (typeof CandidateProfileScalarFieldEnum)[keyof typeof CandidateProfileScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    name: 'name'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const CandidateLanguageScalarFieldEnum: {
    candidateProfileId: 'candidateProfileId',
    level: 'level',
    languageName: 'languageName'
  };

  export type CandidateLanguageScalarFieldEnum = (typeof CandidateLanguageScalarFieldEnum)[keyof typeof CandidateLanguageScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    map: 'map'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const CandidateEducationScalarFieldEnum: {
    candidateProfileId: 'candidateProfileId',
    educationId: 'educationId',
    major: 'major',
    degree: 'degree',
    startYear: 'startYear',
    endYear: 'endYear'
  };

  export type CandidateEducationScalarFieldEnum = (typeof CandidateEducationScalarFieldEnum)[keyof typeof CandidateEducationScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    name: 'name'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const CandidateSkillScalarFieldEnum: {
    candidateProfileId: 'candidateProfileId',
    skillName: 'skillName'
  };

  export type CandidateSkillScalarFieldEnum = (typeof CandidateSkillScalarFieldEnum)[keyof typeof CandidateSkillScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Level'
   */
  export type EnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level'>
    


  /**
   * Reference to a field of type 'Level[]'
   */
  export type ListEnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level[]'>
    


  /**
   * Reference to a field of type 'DEGREE'
   */
  export type EnumDEGREEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DEGREE'>
    


  /**
   * Reference to a field of type 'DEGREE[]'
   */
  export type ListEnumDEGREEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DEGREE[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: BoolFilter<"User"> | boolean
    candidateProfile?: XOR<CandidateProfileNullableScalarRelationFilter, CandidateProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    candidateProfile?: CandidateProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: BoolFilter<"User"> | boolean
    candidateProfile?: XOR<CandidateProfileNullableScalarRelationFilter, CandidateProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type CandidateProfileWhereInput = {
    AND?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    OR?: CandidateProfileWhereInput[]
    NOT?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    id?: StringFilter<"CandidateProfile"> | string
    userId?: StringFilter<"CandidateProfile"> | string
    fullName?: StringFilter<"CandidateProfile"> | string
    gender?: EnumGenderFilter<"CandidateProfile"> | $Enums.Gender
    phone?: StringFilter<"CandidateProfile"> | string
    cv?: StringFilter<"CandidateProfile"> | string
    birthDate?: DateTimeFilter<"CandidateProfile"> | Date | string
    address?: StringFilter<"CandidateProfile"> | string
    status?: BoolFilter<"CandidateProfile"> | boolean
    openToWork?: BoolFilter<"CandidateProfile"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    candidateLanguage?: CandidateLanguageListRelationFilter
    candidateEducation?: CandidateEducationListRelationFilter
    candidateSkills?: CandidateSkillListRelationFilter
  }

  export type CandidateProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    cv?: SortOrder
    birthDate?: SortOrder
    address?: SortOrder
    status?: SortOrder
    openToWork?: SortOrder
    user?: UserOrderByWithRelationInput
    candidateLanguage?: CandidateLanguageOrderByRelationAggregateInput
    candidateEducation?: CandidateEducationOrderByRelationAggregateInput
    candidateSkills?: CandidateSkillOrderByRelationAggregateInput
  }

  export type CandidateProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    OR?: CandidateProfileWhereInput[]
    NOT?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    fullName?: StringFilter<"CandidateProfile"> | string
    gender?: EnumGenderFilter<"CandidateProfile"> | $Enums.Gender
    phone?: StringFilter<"CandidateProfile"> | string
    cv?: StringFilter<"CandidateProfile"> | string
    birthDate?: DateTimeFilter<"CandidateProfile"> | Date | string
    address?: StringFilter<"CandidateProfile"> | string
    status?: BoolFilter<"CandidateProfile"> | boolean
    openToWork?: BoolFilter<"CandidateProfile"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    candidateLanguage?: CandidateLanguageListRelationFilter
    candidateEducation?: CandidateEducationListRelationFilter
    candidateSkills?: CandidateSkillListRelationFilter
  }, "id" | "userId">

  export type CandidateProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    cv?: SortOrder
    birthDate?: SortOrder
    address?: SortOrder
    status?: SortOrder
    openToWork?: SortOrder
    _count?: CandidateProfileCountOrderByAggregateInput
    _max?: CandidateProfileMaxOrderByAggregateInput
    _min?: CandidateProfileMinOrderByAggregateInput
  }

  export type CandidateProfileScalarWhereWithAggregatesInput = {
    AND?: CandidateProfileScalarWhereWithAggregatesInput | CandidateProfileScalarWhereWithAggregatesInput[]
    OR?: CandidateProfileScalarWhereWithAggregatesInput[]
    NOT?: CandidateProfileScalarWhereWithAggregatesInput | CandidateProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CandidateProfile"> | string
    userId?: StringWithAggregatesFilter<"CandidateProfile"> | string
    fullName?: StringWithAggregatesFilter<"CandidateProfile"> | string
    gender?: EnumGenderWithAggregatesFilter<"CandidateProfile"> | $Enums.Gender
    phone?: StringWithAggregatesFilter<"CandidateProfile"> | string
    cv?: StringWithAggregatesFilter<"CandidateProfile"> | string
    birthDate?: DateTimeWithAggregatesFilter<"CandidateProfile"> | Date | string
    address?: StringWithAggregatesFilter<"CandidateProfile"> | string
    status?: BoolWithAggregatesFilter<"CandidateProfile"> | boolean
    openToWork?: BoolWithAggregatesFilter<"CandidateProfile"> | boolean
  }

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    name?: StringFilter<"Language"> | string
    candidateLanguage?: CandidateLanguageListRelationFilter
  }

  export type LanguageOrderByWithRelationInput = {
    name?: SortOrder
    candidateLanguage?: CandidateLanguageOrderByRelationAggregateInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    candidateLanguage?: CandidateLanguageListRelationFilter
  }, "name">

  export type LanguageOrderByWithAggregationInput = {
    name?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Language"> | string
  }

  export type CandidateLanguageWhereInput = {
    AND?: CandidateLanguageWhereInput | CandidateLanguageWhereInput[]
    OR?: CandidateLanguageWhereInput[]
    NOT?: CandidateLanguageWhereInput | CandidateLanguageWhereInput[]
    candidateProfileId?: StringFilter<"CandidateLanguage"> | string
    level?: EnumLevelFilter<"CandidateLanguage"> | $Enums.Level
    languageName?: StringFilter<"CandidateLanguage"> | string
    candidateProfile?: XOR<CandidateProfileScalarRelationFilter, CandidateProfileWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }

  export type CandidateLanguageOrderByWithRelationInput = {
    candidateProfileId?: SortOrder
    level?: SortOrder
    languageName?: SortOrder
    candidateProfile?: CandidateProfileOrderByWithRelationInput
    language?: LanguageOrderByWithRelationInput
  }

  export type CandidateLanguageWhereUniqueInput = Prisma.AtLeast<{
    candidateProfileId_languageName?: CandidateLanguageCandidateProfileIdLanguageNameCompoundUniqueInput
    AND?: CandidateLanguageWhereInput | CandidateLanguageWhereInput[]
    OR?: CandidateLanguageWhereInput[]
    NOT?: CandidateLanguageWhereInput | CandidateLanguageWhereInput[]
    candidateProfileId?: StringFilter<"CandidateLanguage"> | string
    level?: EnumLevelFilter<"CandidateLanguage"> | $Enums.Level
    languageName?: StringFilter<"CandidateLanguage"> | string
    candidateProfile?: XOR<CandidateProfileScalarRelationFilter, CandidateProfileWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }, "candidateProfileId_languageName">

  export type CandidateLanguageOrderByWithAggregationInput = {
    candidateProfileId?: SortOrder
    level?: SortOrder
    languageName?: SortOrder
    _count?: CandidateLanguageCountOrderByAggregateInput
    _max?: CandidateLanguageMaxOrderByAggregateInput
    _min?: CandidateLanguageMinOrderByAggregateInput
  }

  export type CandidateLanguageScalarWhereWithAggregatesInput = {
    AND?: CandidateLanguageScalarWhereWithAggregatesInput | CandidateLanguageScalarWhereWithAggregatesInput[]
    OR?: CandidateLanguageScalarWhereWithAggregatesInput[]
    NOT?: CandidateLanguageScalarWhereWithAggregatesInput | CandidateLanguageScalarWhereWithAggregatesInput[]
    candidateProfileId?: StringWithAggregatesFilter<"CandidateLanguage"> | string
    level?: EnumLevelWithAggregatesFilter<"CandidateLanguage"> | $Enums.Level
    languageName?: StringWithAggregatesFilter<"CandidateLanguage"> | string
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: StringFilter<"Education"> | string
    name?: StringFilter<"Education"> | string
    map?: StringFilter<"Education"> | string
    candidateEducation?: CandidateEducationListRelationFilter
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    map?: SortOrder
    candidateEducation?: CandidateEducationOrderByRelationAggregateInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    name?: StringFilter<"Education"> | string
    map?: StringFilter<"Education"> | string
    candidateEducation?: CandidateEducationListRelationFilter
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    map?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Education"> | string
    name?: StringWithAggregatesFilter<"Education"> | string
    map?: StringWithAggregatesFilter<"Education"> | string
  }

  export type CandidateEducationWhereInput = {
    AND?: CandidateEducationWhereInput | CandidateEducationWhereInput[]
    OR?: CandidateEducationWhereInput[]
    NOT?: CandidateEducationWhereInput | CandidateEducationWhereInput[]
    candidateProfileId?: StringFilter<"CandidateEducation"> | string
    educationId?: StringFilter<"CandidateEducation"> | string
    major?: StringFilter<"CandidateEducation"> | string
    degree?: EnumDEGREEFilter<"CandidateEducation"> | $Enums.DEGREE
    startYear?: DateTimeFilter<"CandidateEducation"> | Date | string
    endYear?: DateTimeFilter<"CandidateEducation"> | Date | string
    candidateProfile?: XOR<CandidateProfileScalarRelationFilter, CandidateProfileWhereInput>
    education?: XOR<EducationScalarRelationFilter, EducationWhereInput>
  }

  export type CandidateEducationOrderByWithRelationInput = {
    candidateProfileId?: SortOrder
    educationId?: SortOrder
    major?: SortOrder
    degree?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrder
    candidateProfile?: CandidateProfileOrderByWithRelationInput
    education?: EducationOrderByWithRelationInput
  }

  export type CandidateEducationWhereUniqueInput = Prisma.AtLeast<{
    candidateProfileId_educationId?: CandidateEducationCandidateProfileIdEducationIdCompoundUniqueInput
    AND?: CandidateEducationWhereInput | CandidateEducationWhereInput[]
    OR?: CandidateEducationWhereInput[]
    NOT?: CandidateEducationWhereInput | CandidateEducationWhereInput[]
    candidateProfileId?: StringFilter<"CandidateEducation"> | string
    educationId?: StringFilter<"CandidateEducation"> | string
    major?: StringFilter<"CandidateEducation"> | string
    degree?: EnumDEGREEFilter<"CandidateEducation"> | $Enums.DEGREE
    startYear?: DateTimeFilter<"CandidateEducation"> | Date | string
    endYear?: DateTimeFilter<"CandidateEducation"> | Date | string
    candidateProfile?: XOR<CandidateProfileScalarRelationFilter, CandidateProfileWhereInput>
    education?: XOR<EducationScalarRelationFilter, EducationWhereInput>
  }, "candidateProfileId_educationId">

  export type CandidateEducationOrderByWithAggregationInput = {
    candidateProfileId?: SortOrder
    educationId?: SortOrder
    major?: SortOrder
    degree?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrder
    _count?: CandidateEducationCountOrderByAggregateInput
    _max?: CandidateEducationMaxOrderByAggregateInput
    _min?: CandidateEducationMinOrderByAggregateInput
  }

  export type CandidateEducationScalarWhereWithAggregatesInput = {
    AND?: CandidateEducationScalarWhereWithAggregatesInput | CandidateEducationScalarWhereWithAggregatesInput[]
    OR?: CandidateEducationScalarWhereWithAggregatesInput[]
    NOT?: CandidateEducationScalarWhereWithAggregatesInput | CandidateEducationScalarWhereWithAggregatesInput[]
    candidateProfileId?: StringWithAggregatesFilter<"CandidateEducation"> | string
    educationId?: StringWithAggregatesFilter<"CandidateEducation"> | string
    major?: StringWithAggregatesFilter<"CandidateEducation"> | string
    degree?: EnumDEGREEWithAggregatesFilter<"CandidateEducation"> | $Enums.DEGREE
    startYear?: DateTimeWithAggregatesFilter<"CandidateEducation"> | Date | string
    endYear?: DateTimeWithAggregatesFilter<"CandidateEducation"> | Date | string
  }

  export type skillWhereInput = {
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    name?: StringFilter<"skill"> | string
    candidateSkills?: CandidateSkillListRelationFilter
  }

  export type skillOrderByWithRelationInput = {
    name?: SortOrder
    candidateSkills?: CandidateSkillOrderByRelationAggregateInput
  }

  export type skillWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    candidateSkills?: CandidateSkillListRelationFilter
  }, "name">

  export type skillOrderByWithAggregationInput = {
    name?: SortOrder
    _count?: skillCountOrderByAggregateInput
    _max?: skillMaxOrderByAggregateInput
    _min?: skillMinOrderByAggregateInput
  }

  export type skillScalarWhereWithAggregatesInput = {
    AND?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    OR?: skillScalarWhereWithAggregatesInput[]
    NOT?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"skill"> | string
  }

  export type CandidateSkillWhereInput = {
    AND?: CandidateSkillWhereInput | CandidateSkillWhereInput[]
    OR?: CandidateSkillWhereInput[]
    NOT?: CandidateSkillWhereInput | CandidateSkillWhereInput[]
    candidateProfileId?: StringFilter<"CandidateSkill"> | string
    skillName?: StringFilter<"CandidateSkill"> | string
    candidateProfile?: XOR<CandidateProfileScalarRelationFilter, CandidateProfileWhereInput>
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
  }

  export type CandidateSkillOrderByWithRelationInput = {
    candidateProfileId?: SortOrder
    skillName?: SortOrder
    candidateProfile?: CandidateProfileOrderByWithRelationInput
    skill?: skillOrderByWithRelationInput
  }

  export type CandidateSkillWhereUniqueInput = Prisma.AtLeast<{
    candidateProfileId_skillName?: CandidateSkillCandidateProfileIdSkillNameCompoundUniqueInput
    AND?: CandidateSkillWhereInput | CandidateSkillWhereInput[]
    OR?: CandidateSkillWhereInput[]
    NOT?: CandidateSkillWhereInput | CandidateSkillWhereInput[]
    candidateProfileId?: StringFilter<"CandidateSkill"> | string
    skillName?: StringFilter<"CandidateSkill"> | string
    candidateProfile?: XOR<CandidateProfileScalarRelationFilter, CandidateProfileWhereInput>
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
  }, "candidateProfileId_skillName">

  export type CandidateSkillOrderByWithAggregationInput = {
    candidateProfileId?: SortOrder
    skillName?: SortOrder
    _count?: CandidateSkillCountOrderByAggregateInput
    _max?: CandidateSkillMaxOrderByAggregateInput
    _min?: CandidateSkillMinOrderByAggregateInput
  }

  export type CandidateSkillScalarWhereWithAggregatesInput = {
    AND?: CandidateSkillScalarWhereWithAggregatesInput | CandidateSkillScalarWhereWithAggregatesInput[]
    OR?: CandidateSkillScalarWhereWithAggregatesInput[]
    NOT?: CandidateSkillScalarWhereWithAggregatesInput | CandidateSkillScalarWhereWithAggregatesInput[]
    candidateProfileId?: StringWithAggregatesFilter<"CandidateSkill"> | string
    skillName?: StringWithAggregatesFilter<"CandidateSkill"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    status?: boolean
    candidateProfile?: CandidateProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    status?: boolean
    candidateProfile?: CandidateProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: BoolFieldUpdateOperationsInput | boolean
    candidateProfile?: CandidateProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: BoolFieldUpdateOperationsInput | boolean
    candidateProfile?: CandidateProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    status?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CandidateProfileCreateInput = {
    id?: string
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthDate: Date | string
    address: string
    status?: boolean
    openToWork?: boolean
    user: UserCreateNestedOneWithoutCandidateProfileInput
    candidateLanguage?: CandidateLanguageCreateNestedManyWithoutCandidateProfileInput
    candidateEducation?: CandidateEducationCreateNestedManyWithoutCandidateProfileInput
    candidateSkills?: CandidateSkillCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileUncheckedCreateInput = {
    id?: string
    userId: string
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthDate: Date | string
    address: string
    status?: boolean
    openToWork?: boolean
    candidateLanguage?: CandidateLanguageUncheckedCreateNestedManyWithoutCandidateProfileInput
    candidateEducation?: CandidateEducationUncheckedCreateNestedManyWithoutCandidateProfileInput
    candidateSkills?: CandidateSkillUncheckedCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCandidateProfileNestedInput
    candidateLanguage?: CandidateLanguageUpdateManyWithoutCandidateProfileNestedInput
    candidateEducation?: CandidateEducationUpdateManyWithoutCandidateProfileNestedInput
    candidateSkills?: CandidateSkillUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    candidateLanguage?: CandidateLanguageUncheckedUpdateManyWithoutCandidateProfileNestedInput
    candidateEducation?: CandidateEducationUncheckedUpdateManyWithoutCandidateProfileNestedInput
    candidateSkills?: CandidateSkillUncheckedUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileCreateManyInput = {
    id?: string
    userId: string
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthDate: Date | string
    address: string
    status?: boolean
    openToWork?: boolean
  }

  export type CandidateProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    openToWork?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CandidateProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    openToWork?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LanguageCreateInput = {
    name: string
    candidateLanguage?: CandidateLanguageCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateInput = {
    name: string
    candidateLanguage?: CandidateLanguageUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    candidateLanguage?: CandidateLanguageUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    candidateLanguage?: CandidateLanguageUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageCreateManyInput = {
    name: string
  }

  export type LanguageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateLanguageCreateInput = {
    level?: $Enums.Level
    candidateProfile: CandidateProfileCreateNestedOneWithoutCandidateLanguageInput
    language: LanguageCreateNestedOneWithoutCandidateLanguageInput
  }

  export type CandidateLanguageUncheckedCreateInput = {
    candidateProfileId: string
    level?: $Enums.Level
    languageName: string
  }

  export type CandidateLanguageUpdateInput = {
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    candidateProfile?: CandidateProfileUpdateOneRequiredWithoutCandidateLanguageNestedInput
    language?: LanguageUpdateOneRequiredWithoutCandidateLanguageNestedInput
  }

  export type CandidateLanguageUncheckedUpdateInput = {
    candidateProfileId?: StringFieldUpdateOperationsInput | string
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    languageName?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateLanguageCreateManyInput = {
    candidateProfileId: string
    level?: $Enums.Level
    languageName: string
  }

  export type CandidateLanguageUpdateManyMutationInput = {
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
  }

  export type CandidateLanguageUncheckedUpdateManyInput = {
    candidateProfileId?: StringFieldUpdateOperationsInput | string
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    languageName?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateInput = {
    id?: string
    name: string
    map: string
    candidateEducation?: CandidateEducationCreateNestedManyWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    name: string
    map: string
    candidateEducation?: CandidateEducationUncheckedCreateNestedManyWithoutEducationInput
  }

  export type EducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    map?: StringFieldUpdateOperationsInput | string
    candidateEducation?: CandidateEducationUpdateManyWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    map?: StringFieldUpdateOperationsInput | string
    candidateEducation?: CandidateEducationUncheckedUpdateManyWithoutEducationNestedInput
  }

  export type EducationCreateManyInput = {
    id?: string
    name: string
    map: string
  }

  export type EducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    map?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    map?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateEducationCreateInput = {
    major: string
    degree?: $Enums.DEGREE
    startYear: Date | string
    endYear: Date | string
    candidateProfile: CandidateProfileCreateNestedOneWithoutCandidateEducationInput
    education: EducationCreateNestedOneWithoutCandidateEducationInput
  }

  export type CandidateEducationUncheckedCreateInput = {
    candidateProfileId: string
    educationId: string
    major: string
    degree?: $Enums.DEGREE
    startYear: Date | string
    endYear: Date | string
  }

  export type CandidateEducationUpdateInput = {
    major?: StringFieldUpdateOperationsInput | string
    degree?: EnumDEGREEFieldUpdateOperationsInput | $Enums.DEGREE
    startYear?: DateTimeFieldUpdateOperationsInput | Date | string
    endYear?: DateTimeFieldUpdateOperationsInput | Date | string
    candidateProfile?: CandidateProfileUpdateOneRequiredWithoutCandidateEducationNestedInput
    education?: EducationUpdateOneRequiredWithoutCandidateEducationNestedInput
  }

  export type CandidateEducationUncheckedUpdateInput = {
    candidateProfileId?: StringFieldUpdateOperationsInput | string
    educationId?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    degree?: EnumDEGREEFieldUpdateOperationsInput | $Enums.DEGREE
    startYear?: DateTimeFieldUpdateOperationsInput | Date | string
    endYear?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateEducationCreateManyInput = {
    candidateProfileId: string
    educationId: string
    major: string
    degree?: $Enums.DEGREE
    startYear: Date | string
    endYear: Date | string
  }

  export type CandidateEducationUpdateManyMutationInput = {
    major?: StringFieldUpdateOperationsInput | string
    degree?: EnumDEGREEFieldUpdateOperationsInput | $Enums.DEGREE
    startYear?: DateTimeFieldUpdateOperationsInput | Date | string
    endYear?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateEducationUncheckedUpdateManyInput = {
    candidateProfileId?: StringFieldUpdateOperationsInput | string
    educationId?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    degree?: EnumDEGREEFieldUpdateOperationsInput | $Enums.DEGREE
    startYear?: DateTimeFieldUpdateOperationsInput | Date | string
    endYear?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillCreateInput = {
    name: string
    candidateSkills?: CandidateSkillCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateInput = {
    name: string
    candidateSkills?: CandidateSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    candidateSkills?: CandidateSkillUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    candidateSkills?: CandidateSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type skillCreateManyInput = {
    name: string
  }

  export type skillUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type skillUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateSkillCreateInput = {
    candidateProfile: CandidateProfileCreateNestedOneWithoutCandidateSkillsInput
    skill: skillCreateNestedOneWithoutCandidateSkillsInput
  }

  export type CandidateSkillUncheckedCreateInput = {
    candidateProfileId: string
    skillName: string
  }

  export type CandidateSkillUpdateInput = {
    candidateProfile?: CandidateProfileUpdateOneRequiredWithoutCandidateSkillsNestedInput
    skill?: skillUpdateOneRequiredWithoutCandidateSkillsNestedInput
  }

  export type CandidateSkillUncheckedUpdateInput = {
    candidateProfileId?: StringFieldUpdateOperationsInput | string
    skillName?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateSkillCreateManyInput = {
    candidateProfileId: string
    skillName: string
  }

  export type CandidateSkillUpdateManyMutationInput = {

  }

  export type CandidateSkillUncheckedUpdateManyInput = {
    candidateProfileId?: StringFieldUpdateOperationsInput | string
    skillName?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CandidateProfileNullableScalarRelationFilter = {
    is?: CandidateProfileWhereInput | null
    isNot?: CandidateProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CandidateLanguageListRelationFilter = {
    every?: CandidateLanguageWhereInput
    some?: CandidateLanguageWhereInput
    none?: CandidateLanguageWhereInput
  }

  export type CandidateEducationListRelationFilter = {
    every?: CandidateEducationWhereInput
    some?: CandidateEducationWhereInput
    none?: CandidateEducationWhereInput
  }

  export type CandidateSkillListRelationFilter = {
    every?: CandidateSkillWhereInput
    some?: CandidateSkillWhereInput
    none?: CandidateSkillWhereInput
  }

  export type CandidateLanguageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateEducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    cv?: SortOrder
    birthDate?: SortOrder
    address?: SortOrder
    status?: SortOrder
    openToWork?: SortOrder
  }

  export type CandidateProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    cv?: SortOrder
    birthDate?: SortOrder
    address?: SortOrder
    status?: SortOrder
    openToWork?: SortOrder
  }

  export type CandidateProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    cv?: SortOrder
    birthDate?: SortOrder
    address?: SortOrder
    status?: SortOrder
    openToWork?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LanguageCountOrderByAggregateInput = {
    name?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    name?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    name?: SortOrder
  }

  export type EnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
  }

  export type CandidateProfileScalarRelationFilter = {
    is?: CandidateProfileWhereInput
    isNot?: CandidateProfileWhereInput
  }

  export type LanguageScalarRelationFilter = {
    is?: LanguageWhereInput
    isNot?: LanguageWhereInput
  }

  export type CandidateLanguageCandidateProfileIdLanguageNameCompoundUniqueInput = {
    candidateProfileId: string
    languageName: string
  }

  export type CandidateLanguageCountOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    level?: SortOrder
    languageName?: SortOrder
  }

  export type CandidateLanguageMaxOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    level?: SortOrder
    languageName?: SortOrder
  }

  export type CandidateLanguageMinOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    level?: SortOrder
    languageName?: SortOrder
  }

  export type EnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    map?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    map?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    map?: SortOrder
  }

  export type EnumDEGREEFilter<$PrismaModel = never> = {
    equals?: $Enums.DEGREE | EnumDEGREEFieldRefInput<$PrismaModel>
    in?: $Enums.DEGREE[] | ListEnumDEGREEFieldRefInput<$PrismaModel>
    notIn?: $Enums.DEGREE[] | ListEnumDEGREEFieldRefInput<$PrismaModel>
    not?: NestedEnumDEGREEFilter<$PrismaModel> | $Enums.DEGREE
  }

  export type EducationScalarRelationFilter = {
    is?: EducationWhereInput
    isNot?: EducationWhereInput
  }

  export type CandidateEducationCandidateProfileIdEducationIdCompoundUniqueInput = {
    candidateProfileId: string
    educationId: string
  }

  export type CandidateEducationCountOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    educationId?: SortOrder
    major?: SortOrder
    degree?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrder
  }

  export type CandidateEducationMaxOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    educationId?: SortOrder
    major?: SortOrder
    degree?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrder
  }

  export type CandidateEducationMinOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    educationId?: SortOrder
    major?: SortOrder
    degree?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrder
  }

  export type EnumDEGREEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DEGREE | EnumDEGREEFieldRefInput<$PrismaModel>
    in?: $Enums.DEGREE[] | ListEnumDEGREEFieldRefInput<$PrismaModel>
    notIn?: $Enums.DEGREE[] | ListEnumDEGREEFieldRefInput<$PrismaModel>
    not?: NestedEnumDEGREEWithAggregatesFilter<$PrismaModel> | $Enums.DEGREE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDEGREEFilter<$PrismaModel>
    _max?: NestedEnumDEGREEFilter<$PrismaModel>
  }

  export type skillCountOrderByAggregateInput = {
    name?: SortOrder
  }

  export type skillMaxOrderByAggregateInput = {
    name?: SortOrder
  }

  export type skillMinOrderByAggregateInput = {
    name?: SortOrder
  }

  export type SkillScalarRelationFilter = {
    is?: skillWhereInput
    isNot?: skillWhereInput
  }

  export type CandidateSkillCandidateProfileIdSkillNameCompoundUniqueInput = {
    candidateProfileId: string
    skillName: string
  }

  export type CandidateSkillCountOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    skillName?: SortOrder
  }

  export type CandidateSkillMaxOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    skillName?: SortOrder
  }

  export type CandidateSkillMinOrderByAggregateInput = {
    candidateProfileId?: SortOrder
    skillName?: SortOrder
  }

  export type CandidateProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    connect?: CandidateProfileWhereUniqueInput
  }

  export type CandidateProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    connect?: CandidateProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CandidateProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    upsert?: CandidateProfileUpsertWithoutUserInput
    disconnect?: CandidateProfileWhereInput | boolean
    delete?: CandidateProfileWhereInput | boolean
    connect?: CandidateProfileWhereUniqueInput
    update?: XOR<XOR<CandidateProfileUpdateToOneWithWhereWithoutUserInput, CandidateProfileUpdateWithoutUserInput>, CandidateProfileUncheckedUpdateWithoutUserInput>
  }

  export type CandidateProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    upsert?: CandidateProfileUpsertWithoutUserInput
    disconnect?: CandidateProfileWhereInput | boolean
    delete?: CandidateProfileWhereInput | boolean
    connect?: CandidateProfileWhereUniqueInput
    update?: XOR<XOR<CandidateProfileUpdateToOneWithWhereWithoutUserInput, CandidateProfileUpdateWithoutUserInput>, CandidateProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutCandidateProfileInput = {
    create?: XOR<UserCreateWithoutCandidateProfileInput, UserUncheckedCreateWithoutCandidateProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidateProfileInput
    connect?: UserWhereUniqueInput
  }

  export type CandidateLanguageCreateNestedManyWithoutCandidateProfileInput = {
    create?: XOR<CandidateLanguageCreateWithoutCandidateProfileInput, CandidateLanguageUncheckedCreateWithoutCandidateProfileInput> | CandidateLanguageCreateWithoutCandidateProfileInput[] | CandidateLanguageUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutCandidateProfileInput | CandidateLanguageCreateOrConnectWithoutCandidateProfileInput[]
    createMany?: CandidateLanguageCreateManyCandidateProfileInputEnvelope
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
  }

  export type CandidateEducationCreateNestedManyWithoutCandidateProfileInput = {
    create?: XOR<CandidateEducationCreateWithoutCandidateProfileInput, CandidateEducationUncheckedCreateWithoutCandidateProfileInput> | CandidateEducationCreateWithoutCandidateProfileInput[] | CandidateEducationUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutCandidateProfileInput | CandidateEducationCreateOrConnectWithoutCandidateProfileInput[]
    createMany?: CandidateEducationCreateManyCandidateProfileInputEnvelope
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
  }

  export type CandidateSkillCreateNestedManyWithoutCandidateProfileInput = {
    create?: XOR<CandidateSkillCreateWithoutCandidateProfileInput, CandidateSkillUncheckedCreateWithoutCandidateProfileInput> | CandidateSkillCreateWithoutCandidateProfileInput[] | CandidateSkillUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutCandidateProfileInput | CandidateSkillCreateOrConnectWithoutCandidateProfileInput[]
    createMany?: CandidateSkillCreateManyCandidateProfileInputEnvelope
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
  }

  export type CandidateLanguageUncheckedCreateNestedManyWithoutCandidateProfileInput = {
    create?: XOR<CandidateLanguageCreateWithoutCandidateProfileInput, CandidateLanguageUncheckedCreateWithoutCandidateProfileInput> | CandidateLanguageCreateWithoutCandidateProfileInput[] | CandidateLanguageUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutCandidateProfileInput | CandidateLanguageCreateOrConnectWithoutCandidateProfileInput[]
    createMany?: CandidateLanguageCreateManyCandidateProfileInputEnvelope
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
  }

  export type CandidateEducationUncheckedCreateNestedManyWithoutCandidateProfileInput = {
    create?: XOR<CandidateEducationCreateWithoutCandidateProfileInput, CandidateEducationUncheckedCreateWithoutCandidateProfileInput> | CandidateEducationCreateWithoutCandidateProfileInput[] | CandidateEducationUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutCandidateProfileInput | CandidateEducationCreateOrConnectWithoutCandidateProfileInput[]
    createMany?: CandidateEducationCreateManyCandidateProfileInputEnvelope
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
  }

  export type CandidateSkillUncheckedCreateNestedManyWithoutCandidateProfileInput = {
    create?: XOR<CandidateSkillCreateWithoutCandidateProfileInput, CandidateSkillUncheckedCreateWithoutCandidateProfileInput> | CandidateSkillCreateWithoutCandidateProfileInput[] | CandidateSkillUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutCandidateProfileInput | CandidateSkillCreateOrConnectWithoutCandidateProfileInput[]
    createMany?: CandidateSkillCreateManyCandidateProfileInputEnvelope
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutCandidateProfileNestedInput = {
    create?: XOR<UserCreateWithoutCandidateProfileInput, UserUncheckedCreateWithoutCandidateProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidateProfileInput
    upsert?: UserUpsertWithoutCandidateProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCandidateProfileInput, UserUpdateWithoutCandidateProfileInput>, UserUncheckedUpdateWithoutCandidateProfileInput>
  }

  export type CandidateLanguageUpdateManyWithoutCandidateProfileNestedInput = {
    create?: XOR<CandidateLanguageCreateWithoutCandidateProfileInput, CandidateLanguageUncheckedCreateWithoutCandidateProfileInput> | CandidateLanguageCreateWithoutCandidateProfileInput[] | CandidateLanguageUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutCandidateProfileInput | CandidateLanguageCreateOrConnectWithoutCandidateProfileInput[]
    upsert?: CandidateLanguageUpsertWithWhereUniqueWithoutCandidateProfileInput | CandidateLanguageUpsertWithWhereUniqueWithoutCandidateProfileInput[]
    createMany?: CandidateLanguageCreateManyCandidateProfileInputEnvelope
    set?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    disconnect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    delete?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    update?: CandidateLanguageUpdateWithWhereUniqueWithoutCandidateProfileInput | CandidateLanguageUpdateWithWhereUniqueWithoutCandidateProfileInput[]
    updateMany?: CandidateLanguageUpdateManyWithWhereWithoutCandidateProfileInput | CandidateLanguageUpdateManyWithWhereWithoutCandidateProfileInput[]
    deleteMany?: CandidateLanguageScalarWhereInput | CandidateLanguageScalarWhereInput[]
  }

  export type CandidateEducationUpdateManyWithoutCandidateProfileNestedInput = {
    create?: XOR<CandidateEducationCreateWithoutCandidateProfileInput, CandidateEducationUncheckedCreateWithoutCandidateProfileInput> | CandidateEducationCreateWithoutCandidateProfileInput[] | CandidateEducationUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutCandidateProfileInput | CandidateEducationCreateOrConnectWithoutCandidateProfileInput[]
    upsert?: CandidateEducationUpsertWithWhereUniqueWithoutCandidateProfileInput | CandidateEducationUpsertWithWhereUniqueWithoutCandidateProfileInput[]
    createMany?: CandidateEducationCreateManyCandidateProfileInputEnvelope
    set?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    disconnect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    delete?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    update?: CandidateEducationUpdateWithWhereUniqueWithoutCandidateProfileInput | CandidateEducationUpdateWithWhereUniqueWithoutCandidateProfileInput[]
    updateMany?: CandidateEducationUpdateManyWithWhereWithoutCandidateProfileInput | CandidateEducationUpdateManyWithWhereWithoutCandidateProfileInput[]
    deleteMany?: CandidateEducationScalarWhereInput | CandidateEducationScalarWhereInput[]
  }

  export type CandidateSkillUpdateManyWithoutCandidateProfileNestedInput = {
    create?: XOR<CandidateSkillCreateWithoutCandidateProfileInput, CandidateSkillUncheckedCreateWithoutCandidateProfileInput> | CandidateSkillCreateWithoutCandidateProfileInput[] | CandidateSkillUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutCandidateProfileInput | CandidateSkillCreateOrConnectWithoutCandidateProfileInput[]
    upsert?: CandidateSkillUpsertWithWhereUniqueWithoutCandidateProfileInput | CandidateSkillUpsertWithWhereUniqueWithoutCandidateProfileInput[]
    createMany?: CandidateSkillCreateManyCandidateProfileInputEnvelope
    set?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    disconnect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    delete?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    update?: CandidateSkillUpdateWithWhereUniqueWithoutCandidateProfileInput | CandidateSkillUpdateWithWhereUniqueWithoutCandidateProfileInput[]
    updateMany?: CandidateSkillUpdateManyWithWhereWithoutCandidateProfileInput | CandidateSkillUpdateManyWithWhereWithoutCandidateProfileInput[]
    deleteMany?: CandidateSkillScalarWhereInput | CandidateSkillScalarWhereInput[]
  }

  export type CandidateLanguageUncheckedUpdateManyWithoutCandidateProfileNestedInput = {
    create?: XOR<CandidateLanguageCreateWithoutCandidateProfileInput, CandidateLanguageUncheckedCreateWithoutCandidateProfileInput> | CandidateLanguageCreateWithoutCandidateProfileInput[] | CandidateLanguageUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutCandidateProfileInput | CandidateLanguageCreateOrConnectWithoutCandidateProfileInput[]
    upsert?: CandidateLanguageUpsertWithWhereUniqueWithoutCandidateProfileInput | CandidateLanguageUpsertWithWhereUniqueWithoutCandidateProfileInput[]
    createMany?: CandidateLanguageCreateManyCandidateProfileInputEnvelope
    set?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    disconnect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    delete?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    update?: CandidateLanguageUpdateWithWhereUniqueWithoutCandidateProfileInput | CandidateLanguageUpdateWithWhereUniqueWithoutCandidateProfileInput[]
    updateMany?: CandidateLanguageUpdateManyWithWhereWithoutCandidateProfileInput | CandidateLanguageUpdateManyWithWhereWithoutCandidateProfileInput[]
    deleteMany?: CandidateLanguageScalarWhereInput | CandidateLanguageScalarWhereInput[]
  }

  export type CandidateEducationUncheckedUpdateManyWithoutCandidateProfileNestedInput = {
    create?: XOR<CandidateEducationCreateWithoutCandidateProfileInput, CandidateEducationUncheckedCreateWithoutCandidateProfileInput> | CandidateEducationCreateWithoutCandidateProfileInput[] | CandidateEducationUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutCandidateProfileInput | CandidateEducationCreateOrConnectWithoutCandidateProfileInput[]
    upsert?: CandidateEducationUpsertWithWhereUniqueWithoutCandidateProfileInput | CandidateEducationUpsertWithWhereUniqueWithoutCandidateProfileInput[]
    createMany?: CandidateEducationCreateManyCandidateProfileInputEnvelope
    set?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    disconnect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    delete?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    update?: CandidateEducationUpdateWithWhereUniqueWithoutCandidateProfileInput | CandidateEducationUpdateWithWhereUniqueWithoutCandidateProfileInput[]
    updateMany?: CandidateEducationUpdateManyWithWhereWithoutCandidateProfileInput | CandidateEducationUpdateManyWithWhereWithoutCandidateProfileInput[]
    deleteMany?: CandidateEducationScalarWhereInput | CandidateEducationScalarWhereInput[]
  }

  export type CandidateSkillUncheckedUpdateManyWithoutCandidateProfileNestedInput = {
    create?: XOR<CandidateSkillCreateWithoutCandidateProfileInput, CandidateSkillUncheckedCreateWithoutCandidateProfileInput> | CandidateSkillCreateWithoutCandidateProfileInput[] | CandidateSkillUncheckedCreateWithoutCandidateProfileInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutCandidateProfileInput | CandidateSkillCreateOrConnectWithoutCandidateProfileInput[]
    upsert?: CandidateSkillUpsertWithWhereUniqueWithoutCandidateProfileInput | CandidateSkillUpsertWithWhereUniqueWithoutCandidateProfileInput[]
    createMany?: CandidateSkillCreateManyCandidateProfileInputEnvelope
    set?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    disconnect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    delete?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    update?: CandidateSkillUpdateWithWhereUniqueWithoutCandidateProfileInput | CandidateSkillUpdateWithWhereUniqueWithoutCandidateProfileInput[]
    updateMany?: CandidateSkillUpdateManyWithWhereWithoutCandidateProfileInput | CandidateSkillUpdateManyWithWhereWithoutCandidateProfileInput[]
    deleteMany?: CandidateSkillScalarWhereInput | CandidateSkillScalarWhereInput[]
  }

  export type CandidateLanguageCreateNestedManyWithoutLanguageInput = {
    create?: XOR<CandidateLanguageCreateWithoutLanguageInput, CandidateLanguageUncheckedCreateWithoutLanguageInput> | CandidateLanguageCreateWithoutLanguageInput[] | CandidateLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutLanguageInput | CandidateLanguageCreateOrConnectWithoutLanguageInput[]
    createMany?: CandidateLanguageCreateManyLanguageInputEnvelope
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
  }

  export type CandidateLanguageUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<CandidateLanguageCreateWithoutLanguageInput, CandidateLanguageUncheckedCreateWithoutLanguageInput> | CandidateLanguageCreateWithoutLanguageInput[] | CandidateLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutLanguageInput | CandidateLanguageCreateOrConnectWithoutLanguageInput[]
    createMany?: CandidateLanguageCreateManyLanguageInputEnvelope
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
  }

  export type CandidateLanguageUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<CandidateLanguageCreateWithoutLanguageInput, CandidateLanguageUncheckedCreateWithoutLanguageInput> | CandidateLanguageCreateWithoutLanguageInput[] | CandidateLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutLanguageInput | CandidateLanguageCreateOrConnectWithoutLanguageInput[]
    upsert?: CandidateLanguageUpsertWithWhereUniqueWithoutLanguageInput | CandidateLanguageUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: CandidateLanguageCreateManyLanguageInputEnvelope
    set?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    disconnect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    delete?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    update?: CandidateLanguageUpdateWithWhereUniqueWithoutLanguageInput | CandidateLanguageUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: CandidateLanguageUpdateManyWithWhereWithoutLanguageInput | CandidateLanguageUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: CandidateLanguageScalarWhereInput | CandidateLanguageScalarWhereInput[]
  }

  export type CandidateLanguageUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<CandidateLanguageCreateWithoutLanguageInput, CandidateLanguageUncheckedCreateWithoutLanguageInput> | CandidateLanguageCreateWithoutLanguageInput[] | CandidateLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: CandidateLanguageCreateOrConnectWithoutLanguageInput | CandidateLanguageCreateOrConnectWithoutLanguageInput[]
    upsert?: CandidateLanguageUpsertWithWhereUniqueWithoutLanguageInput | CandidateLanguageUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: CandidateLanguageCreateManyLanguageInputEnvelope
    set?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    disconnect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    delete?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    connect?: CandidateLanguageWhereUniqueInput | CandidateLanguageWhereUniqueInput[]
    update?: CandidateLanguageUpdateWithWhereUniqueWithoutLanguageInput | CandidateLanguageUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: CandidateLanguageUpdateManyWithWhereWithoutLanguageInput | CandidateLanguageUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: CandidateLanguageScalarWhereInput | CandidateLanguageScalarWhereInput[]
  }

  export type CandidateProfileCreateNestedOneWithoutCandidateLanguageInput = {
    create?: XOR<CandidateProfileCreateWithoutCandidateLanguageInput, CandidateProfileUncheckedCreateWithoutCandidateLanguageInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCandidateLanguageInput
    connect?: CandidateProfileWhereUniqueInput
  }

  export type LanguageCreateNestedOneWithoutCandidateLanguageInput = {
    create?: XOR<LanguageCreateWithoutCandidateLanguageInput, LanguageUncheckedCreateWithoutCandidateLanguageInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutCandidateLanguageInput
    connect?: LanguageWhereUniqueInput
  }

  export type EnumLevelFieldUpdateOperationsInput = {
    set?: $Enums.Level
  }

  export type CandidateProfileUpdateOneRequiredWithoutCandidateLanguageNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutCandidateLanguageInput, CandidateProfileUncheckedCreateWithoutCandidateLanguageInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCandidateLanguageInput
    upsert?: CandidateProfileUpsertWithoutCandidateLanguageInput
    connect?: CandidateProfileWhereUniqueInput
    update?: XOR<XOR<CandidateProfileUpdateToOneWithWhereWithoutCandidateLanguageInput, CandidateProfileUpdateWithoutCandidateLanguageInput>, CandidateProfileUncheckedUpdateWithoutCandidateLanguageInput>
  }

  export type LanguageUpdateOneRequiredWithoutCandidateLanguageNestedInput = {
    create?: XOR<LanguageCreateWithoutCandidateLanguageInput, LanguageUncheckedCreateWithoutCandidateLanguageInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutCandidateLanguageInput
    upsert?: LanguageUpsertWithoutCandidateLanguageInput
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutCandidateLanguageInput, LanguageUpdateWithoutCandidateLanguageInput>, LanguageUncheckedUpdateWithoutCandidateLanguageInput>
  }

  export type CandidateEducationCreateNestedManyWithoutEducationInput = {
    create?: XOR<CandidateEducationCreateWithoutEducationInput, CandidateEducationUncheckedCreateWithoutEducationInput> | CandidateEducationCreateWithoutEducationInput[] | CandidateEducationUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutEducationInput | CandidateEducationCreateOrConnectWithoutEducationInput[]
    createMany?: CandidateEducationCreateManyEducationInputEnvelope
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
  }

  export type CandidateEducationUncheckedCreateNestedManyWithoutEducationInput = {
    create?: XOR<CandidateEducationCreateWithoutEducationInput, CandidateEducationUncheckedCreateWithoutEducationInput> | CandidateEducationCreateWithoutEducationInput[] | CandidateEducationUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutEducationInput | CandidateEducationCreateOrConnectWithoutEducationInput[]
    createMany?: CandidateEducationCreateManyEducationInputEnvelope
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
  }

  export type CandidateEducationUpdateManyWithoutEducationNestedInput = {
    create?: XOR<CandidateEducationCreateWithoutEducationInput, CandidateEducationUncheckedCreateWithoutEducationInput> | CandidateEducationCreateWithoutEducationInput[] | CandidateEducationUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutEducationInput | CandidateEducationCreateOrConnectWithoutEducationInput[]
    upsert?: CandidateEducationUpsertWithWhereUniqueWithoutEducationInput | CandidateEducationUpsertWithWhereUniqueWithoutEducationInput[]
    createMany?: CandidateEducationCreateManyEducationInputEnvelope
    set?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    disconnect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    delete?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    update?: CandidateEducationUpdateWithWhereUniqueWithoutEducationInput | CandidateEducationUpdateWithWhereUniqueWithoutEducationInput[]
    updateMany?: CandidateEducationUpdateManyWithWhereWithoutEducationInput | CandidateEducationUpdateManyWithWhereWithoutEducationInput[]
    deleteMany?: CandidateEducationScalarWhereInput | CandidateEducationScalarWhereInput[]
  }

  export type CandidateEducationUncheckedUpdateManyWithoutEducationNestedInput = {
    create?: XOR<CandidateEducationCreateWithoutEducationInput, CandidateEducationUncheckedCreateWithoutEducationInput> | CandidateEducationCreateWithoutEducationInput[] | CandidateEducationUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: CandidateEducationCreateOrConnectWithoutEducationInput | CandidateEducationCreateOrConnectWithoutEducationInput[]
    upsert?: CandidateEducationUpsertWithWhereUniqueWithoutEducationInput | CandidateEducationUpsertWithWhereUniqueWithoutEducationInput[]
    createMany?: CandidateEducationCreateManyEducationInputEnvelope
    set?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    disconnect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    delete?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    connect?: CandidateEducationWhereUniqueInput | CandidateEducationWhereUniqueInput[]
    update?: CandidateEducationUpdateWithWhereUniqueWithoutEducationInput | CandidateEducationUpdateWithWhereUniqueWithoutEducationInput[]
    updateMany?: CandidateEducationUpdateManyWithWhereWithoutEducationInput | CandidateEducationUpdateManyWithWhereWithoutEducationInput[]
    deleteMany?: CandidateEducationScalarWhereInput | CandidateEducationScalarWhereInput[]
  }

  export type CandidateProfileCreateNestedOneWithoutCandidateEducationInput = {
    create?: XOR<CandidateProfileCreateWithoutCandidateEducationInput, CandidateProfileUncheckedCreateWithoutCandidateEducationInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCandidateEducationInput
    connect?: CandidateProfileWhereUniqueInput
  }

  export type EducationCreateNestedOneWithoutCandidateEducationInput = {
    create?: XOR<EducationCreateWithoutCandidateEducationInput, EducationUncheckedCreateWithoutCandidateEducationInput>
    connectOrCreate?: EducationCreateOrConnectWithoutCandidateEducationInput
    connect?: EducationWhereUniqueInput
  }

  export type EnumDEGREEFieldUpdateOperationsInput = {
    set?: $Enums.DEGREE
  }

  export type CandidateProfileUpdateOneRequiredWithoutCandidateEducationNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutCandidateEducationInput, CandidateProfileUncheckedCreateWithoutCandidateEducationInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCandidateEducationInput
    upsert?: CandidateProfileUpsertWithoutCandidateEducationInput
    connect?: CandidateProfileWhereUniqueInput
    update?: XOR<XOR<CandidateProfileUpdateToOneWithWhereWithoutCandidateEducationInput, CandidateProfileUpdateWithoutCandidateEducationInput>, CandidateProfileUncheckedUpdateWithoutCandidateEducationInput>
  }

  export type EducationUpdateOneRequiredWithoutCandidateEducationNestedInput = {
    create?: XOR<EducationCreateWithoutCandidateEducationInput, EducationUncheckedCreateWithoutCandidateEducationInput>
    connectOrCreate?: EducationCreateOrConnectWithoutCandidateEducationInput
    upsert?: EducationUpsertWithoutCandidateEducationInput
    connect?: EducationWhereUniqueInput
    update?: XOR<XOR<EducationUpdateToOneWithWhereWithoutCandidateEducationInput, EducationUpdateWithoutCandidateEducationInput>, EducationUncheckedUpdateWithoutCandidateEducationInput>
  }

  export type CandidateSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<CandidateSkillCreateWithoutSkillInput, CandidateSkillUncheckedCreateWithoutSkillInput> | CandidateSkillCreateWithoutSkillInput[] | CandidateSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutSkillInput | CandidateSkillCreateOrConnectWithoutSkillInput[]
    createMany?: CandidateSkillCreateManySkillInputEnvelope
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
  }

  export type CandidateSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<CandidateSkillCreateWithoutSkillInput, CandidateSkillUncheckedCreateWithoutSkillInput> | CandidateSkillCreateWithoutSkillInput[] | CandidateSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutSkillInput | CandidateSkillCreateOrConnectWithoutSkillInput[]
    createMany?: CandidateSkillCreateManySkillInputEnvelope
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
  }

  export type CandidateSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<CandidateSkillCreateWithoutSkillInput, CandidateSkillUncheckedCreateWithoutSkillInput> | CandidateSkillCreateWithoutSkillInput[] | CandidateSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutSkillInput | CandidateSkillCreateOrConnectWithoutSkillInput[]
    upsert?: CandidateSkillUpsertWithWhereUniqueWithoutSkillInput | CandidateSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: CandidateSkillCreateManySkillInputEnvelope
    set?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    disconnect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    delete?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    update?: CandidateSkillUpdateWithWhereUniqueWithoutSkillInput | CandidateSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: CandidateSkillUpdateManyWithWhereWithoutSkillInput | CandidateSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: CandidateSkillScalarWhereInput | CandidateSkillScalarWhereInput[]
  }

  export type CandidateSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<CandidateSkillCreateWithoutSkillInput, CandidateSkillUncheckedCreateWithoutSkillInput> | CandidateSkillCreateWithoutSkillInput[] | CandidateSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutSkillInput | CandidateSkillCreateOrConnectWithoutSkillInput[]
    upsert?: CandidateSkillUpsertWithWhereUniqueWithoutSkillInput | CandidateSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: CandidateSkillCreateManySkillInputEnvelope
    set?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    disconnect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    delete?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    update?: CandidateSkillUpdateWithWhereUniqueWithoutSkillInput | CandidateSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: CandidateSkillUpdateManyWithWhereWithoutSkillInput | CandidateSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: CandidateSkillScalarWhereInput | CandidateSkillScalarWhereInput[]
  }

  export type CandidateProfileCreateNestedOneWithoutCandidateSkillsInput = {
    create?: XOR<CandidateProfileCreateWithoutCandidateSkillsInput, CandidateProfileUncheckedCreateWithoutCandidateSkillsInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCandidateSkillsInput
    connect?: CandidateProfileWhereUniqueInput
  }

  export type skillCreateNestedOneWithoutCandidateSkillsInput = {
    create?: XOR<skillCreateWithoutCandidateSkillsInput, skillUncheckedCreateWithoutCandidateSkillsInput>
    connectOrCreate?: skillCreateOrConnectWithoutCandidateSkillsInput
    connect?: skillWhereUniqueInput
  }

  export type CandidateProfileUpdateOneRequiredWithoutCandidateSkillsNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutCandidateSkillsInput, CandidateProfileUncheckedCreateWithoutCandidateSkillsInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCandidateSkillsInput
    upsert?: CandidateProfileUpsertWithoutCandidateSkillsInput
    connect?: CandidateProfileWhereUniqueInput
    update?: XOR<XOR<CandidateProfileUpdateToOneWithWhereWithoutCandidateSkillsInput, CandidateProfileUpdateWithoutCandidateSkillsInput>, CandidateProfileUncheckedUpdateWithoutCandidateSkillsInput>
  }

  export type skillUpdateOneRequiredWithoutCandidateSkillsNestedInput = {
    create?: XOR<skillCreateWithoutCandidateSkillsInput, skillUncheckedCreateWithoutCandidateSkillsInput>
    connectOrCreate?: skillCreateOrConnectWithoutCandidateSkillsInput
    upsert?: skillUpsertWithoutCandidateSkillsInput
    connect?: skillWhereUniqueInput
    update?: XOR<XOR<skillUpdateToOneWithWhereWithoutCandidateSkillsInput, skillUpdateWithoutCandidateSkillsInput>, skillUncheckedUpdateWithoutCandidateSkillsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
  }

  export type NestedEnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
  }

  export type NestedEnumDEGREEFilter<$PrismaModel = never> = {
    equals?: $Enums.DEGREE | EnumDEGREEFieldRefInput<$PrismaModel>
    in?: $Enums.DEGREE[] | ListEnumDEGREEFieldRefInput<$PrismaModel>
    notIn?: $Enums.DEGREE[] | ListEnumDEGREEFieldRefInput<$PrismaModel>
    not?: NestedEnumDEGREEFilter<$PrismaModel> | $Enums.DEGREE
  }

  export type NestedEnumDEGREEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DEGREE | EnumDEGREEFieldRefInput<$PrismaModel>
    in?: $Enums.DEGREE[] | ListEnumDEGREEFieldRefInput<$PrismaModel>
    notIn?: $Enums.DEGREE[] | ListEnumDEGREEFieldRefInput<$PrismaModel>
    not?: NestedEnumDEGREEWithAggregatesFilter<$PrismaModel> | $Enums.DEGREE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDEGREEFilter<$PrismaModel>
    _max?: NestedEnumDEGREEFilter<$PrismaModel>
  }

  export type CandidateProfileCreateWithoutUserInput = {
    id?: string
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthDate: Date | string
    address: string
    status?: boolean
    openToWork?: boolean
    candidateLanguage?: CandidateLanguageCreateNestedManyWithoutCandidateProfileInput
    candidateEducation?: CandidateEducationCreateNestedManyWithoutCandidateProfileInput
    candidateSkills?: CandidateSkillCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthDate: Date | string
    address: string
    status?: boolean
    openToWork?: boolean
    candidateLanguage?: CandidateLanguageUncheckedCreateNestedManyWithoutCandidateProfileInput
    candidateEducation?: CandidateEducationUncheckedCreateNestedManyWithoutCandidateProfileInput
    candidateSkills?: CandidateSkillUncheckedCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileCreateOrConnectWithoutUserInput = {
    where: CandidateProfileWhereUniqueInput
    create: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
  }

  export type CandidateProfileUpsertWithoutUserInput = {
    update: XOR<CandidateProfileUpdateWithoutUserInput, CandidateProfileUncheckedUpdateWithoutUserInput>
    create: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    where?: CandidateProfileWhereInput
  }

  export type CandidateProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: CandidateProfileWhereInput
    data: XOR<CandidateProfileUpdateWithoutUserInput, CandidateProfileUncheckedUpdateWithoutUserInput>
  }

  export type CandidateProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    candidateLanguage?: CandidateLanguageUpdateManyWithoutCandidateProfileNestedInput
    candidateEducation?: CandidateEducationUpdateManyWithoutCandidateProfileNestedInput
    candidateSkills?: CandidateSkillUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    candidateLanguage?: CandidateLanguageUncheckedUpdateManyWithoutCandidateProfileNestedInput
    candidateEducation?: CandidateEducationUncheckedUpdateManyWithoutCandidateProfileNestedInput
    candidateSkills?: CandidateSkillUncheckedUpdateManyWithoutCandidateProfileNestedInput
  }

  export type UserCreateWithoutCandidateProfileInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    status?: boolean
  }

  export type UserUncheckedCreateWithoutCandidateProfileInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    status?: boolean
  }

  export type UserCreateOrConnectWithoutCandidateProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCandidateProfileInput, UserUncheckedCreateWithoutCandidateProfileInput>
  }

  export type CandidateLanguageCreateWithoutCandidateProfileInput = {
    level?: $Enums.Level
    language: LanguageCreateNestedOneWithoutCandidateLanguageInput
  }

  export type CandidateLanguageUncheckedCreateWithoutCandidateProfileInput = {
    level?: $Enums.Level
    languageName: string
  }

  export type CandidateLanguageCreateOrConnectWithoutCandidateProfileInput = {
    where: CandidateLanguageWhereUniqueInput
    create: XOR<CandidateLanguageCreateWithoutCandidateProfileInput, CandidateLanguageUncheckedCreateWithoutCandidateProfileInput>
  }

  export type CandidateLanguageCreateManyCandidateProfileInputEnvelope = {
    data: CandidateLanguageCreateManyCandidateProfileInput | CandidateLanguageCreateManyCandidateProfileInput[]
    skipDuplicates?: boolean
  }

  export type CandidateEducationCreateWithoutCandidateProfileInput = {
    major: string
    degree?: $Enums.DEGREE
    startYear: Date | string
    endYear: Date | string
    education: EducationCreateNestedOneWithoutCandidateEducationInput
  }

  export type CandidateEducationUncheckedCreateWithoutCandidateProfileInput = {
    educationId: string
    major: string
    degree?: $Enums.DEGREE
    startYear: Date | string
    endYear: Date | string
  }

  export type CandidateEducationCreateOrConnectWithoutCandidateProfileInput = {
    where: CandidateEducationWhereUniqueInput
    create: XOR<CandidateEducationCreateWithoutCandidateProfileInput, CandidateEducationUncheckedCreateWithoutCandidateProfileInput>
  }

  export type CandidateEducationCreateManyCandidateProfileInputEnvelope = {
    data: CandidateEducationCreateManyCandidateProfileInput | CandidateEducationCreateManyCandidateProfileInput[]
    skipDuplicates?: boolean
  }

  export type CandidateSkillCreateWithoutCandidateProfileInput = {
    skill: skillCreateNestedOneWithoutCandidateSkillsInput
  }

  export type CandidateSkillUncheckedCreateWithoutCandidateProfileInput = {
    skillName: string
  }

  export type CandidateSkillCreateOrConnectWithoutCandidateProfileInput = {
    where: CandidateSkillWhereUniqueInput
    create: XOR<CandidateSkillCreateWithoutCandidateProfileInput, CandidateSkillUncheckedCreateWithoutCandidateProfileInput>
  }

  export type CandidateSkillCreateManyCandidateProfileInputEnvelope = {
    data: CandidateSkillCreateManyCandidateProfileInput | CandidateSkillCreateManyCandidateProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCandidateProfileInput = {
    update: XOR<UserUpdateWithoutCandidateProfileInput, UserUncheckedUpdateWithoutCandidateProfileInput>
    create: XOR<UserCreateWithoutCandidateProfileInput, UserUncheckedCreateWithoutCandidateProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCandidateProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCandidateProfileInput, UserUncheckedUpdateWithoutCandidateProfileInput>
  }

  export type UserUpdateWithoutCandidateProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateWithoutCandidateProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CandidateLanguageUpsertWithWhereUniqueWithoutCandidateProfileInput = {
    where: CandidateLanguageWhereUniqueInput
    update: XOR<CandidateLanguageUpdateWithoutCandidateProfileInput, CandidateLanguageUncheckedUpdateWithoutCandidateProfileInput>
    create: XOR<CandidateLanguageCreateWithoutCandidateProfileInput, CandidateLanguageUncheckedCreateWithoutCandidateProfileInput>
  }

  export type CandidateLanguageUpdateWithWhereUniqueWithoutCandidateProfileInput = {
    where: CandidateLanguageWhereUniqueInput
    data: XOR<CandidateLanguageUpdateWithoutCandidateProfileInput, CandidateLanguageUncheckedUpdateWithoutCandidateProfileInput>
  }

  export type CandidateLanguageUpdateManyWithWhereWithoutCandidateProfileInput = {
    where: CandidateLanguageScalarWhereInput
    data: XOR<CandidateLanguageUpdateManyMutationInput, CandidateLanguageUncheckedUpdateManyWithoutCandidateProfileInput>
  }

  export type CandidateLanguageScalarWhereInput = {
    AND?: CandidateLanguageScalarWhereInput | CandidateLanguageScalarWhereInput[]
    OR?: CandidateLanguageScalarWhereInput[]
    NOT?: CandidateLanguageScalarWhereInput | CandidateLanguageScalarWhereInput[]
    candidateProfileId?: StringFilter<"CandidateLanguage"> | string
    level?: EnumLevelFilter<"CandidateLanguage"> | $Enums.Level
    languageName?: StringFilter<"CandidateLanguage"> | string
  }

  export type CandidateEducationUpsertWithWhereUniqueWithoutCandidateProfileInput = {
    where: CandidateEducationWhereUniqueInput
    update: XOR<CandidateEducationUpdateWithoutCandidateProfileInput, CandidateEducationUncheckedUpdateWithoutCandidateProfileInput>
    create: XOR<CandidateEducationCreateWithoutCandidateProfileInput, CandidateEducationUncheckedCreateWithoutCandidateProfileInput>
  }

  export type CandidateEducationUpdateWithWhereUniqueWithoutCandidateProfileInput = {
    where: CandidateEducationWhereUniqueInput
    data: XOR<CandidateEducationUpdateWithoutCandidateProfileInput, CandidateEducationUncheckedUpdateWithoutCandidateProfileInput>
  }

  export type CandidateEducationUpdateManyWithWhereWithoutCandidateProfileInput = {
    where: CandidateEducationScalarWhereInput
    data: XOR<CandidateEducationUpdateManyMutationInput, CandidateEducationUncheckedUpdateManyWithoutCandidateProfileInput>
  }

  export type CandidateEducationScalarWhereInput = {
    AND?: CandidateEducationScalarWhereInput | CandidateEducationScalarWhereInput[]
    OR?: CandidateEducationScalarWhereInput[]
    NOT?: CandidateEducationScalarWhereInput | CandidateEducationScalarWhereInput[]
    candidateProfileId?: StringFilter<"CandidateEducation"> | string
    educationId?: StringFilter<"CandidateEducation"> | string
    major?: StringFilter<"CandidateEducation"> | string
    degree?: EnumDEGREEFilter<"CandidateEducation"> | $Enums.DEGREE
    startYear?: DateTimeFilter<"CandidateEducation"> | Date | string
    endYear?: DateTimeFilter<"CandidateEducation"> | Date | string
  }

  export type CandidateSkillUpsertWithWhereUniqueWithoutCandidateProfileInput = {
    where: CandidateSkillWhereUniqueInput
    update: XOR<CandidateSkillUpdateWithoutCandidateProfileInput, CandidateSkillUncheckedUpdateWithoutCandidateProfileInput>
    create: XOR<CandidateSkillCreateWithoutCandidateProfileInput, CandidateSkillUncheckedCreateWithoutCandidateProfileInput>
  }

  export type CandidateSkillUpdateWithWhereUniqueWithoutCandidateProfileInput = {
    where: CandidateSkillWhereUniqueInput
    data: XOR<CandidateSkillUpdateWithoutCandidateProfileInput, CandidateSkillUncheckedUpdateWithoutCandidateProfileInput>
  }

  export type CandidateSkillUpdateManyWithWhereWithoutCandidateProfileInput = {
    where: CandidateSkillScalarWhereInput
    data: XOR<CandidateSkillUpdateManyMutationInput, CandidateSkillUncheckedUpdateManyWithoutCandidateProfileInput>
  }

  export type CandidateSkillScalarWhereInput = {
    AND?: CandidateSkillScalarWhereInput | CandidateSkillScalarWhereInput[]
    OR?: CandidateSkillScalarWhereInput[]
    NOT?: CandidateSkillScalarWhereInput | CandidateSkillScalarWhereInput[]
    candidateProfileId?: StringFilter<"CandidateSkill"> | string
    skillName?: StringFilter<"CandidateSkill"> | string
  }

  export type CandidateLanguageCreateWithoutLanguageInput = {
    level?: $Enums.Level
    candidateProfile: CandidateProfileCreateNestedOneWithoutCandidateLanguageInput
  }

  export type CandidateLanguageUncheckedCreateWithoutLanguageInput = {
    candidateProfileId: string
    level?: $Enums.Level
  }

  export type CandidateLanguageCreateOrConnectWithoutLanguageInput = {
    where: CandidateLanguageWhereUniqueInput
    create: XOR<CandidateLanguageCreateWithoutLanguageInput, CandidateLanguageUncheckedCreateWithoutLanguageInput>
  }

  export type CandidateLanguageCreateManyLanguageInputEnvelope = {
    data: CandidateLanguageCreateManyLanguageInput | CandidateLanguageCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type CandidateLanguageUpsertWithWhereUniqueWithoutLanguageInput = {
    where: CandidateLanguageWhereUniqueInput
    update: XOR<CandidateLanguageUpdateWithoutLanguageInput, CandidateLanguageUncheckedUpdateWithoutLanguageInput>
    create: XOR<CandidateLanguageCreateWithoutLanguageInput, CandidateLanguageUncheckedCreateWithoutLanguageInput>
  }

  export type CandidateLanguageUpdateWithWhereUniqueWithoutLanguageInput = {
    where: CandidateLanguageWhereUniqueInput
    data: XOR<CandidateLanguageUpdateWithoutLanguageInput, CandidateLanguageUncheckedUpdateWithoutLanguageInput>
  }

  export type CandidateLanguageUpdateManyWithWhereWithoutLanguageInput = {
    where: CandidateLanguageScalarWhereInput
    data: XOR<CandidateLanguageUpdateManyMutationInput, CandidateLanguageUncheckedUpdateManyWithoutLanguageInput>
  }

  export type CandidateProfileCreateWithoutCandidateLanguageInput = {
    id?: string
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthDate: Date | string
    address: string
    status?: boolean
    openToWork?: boolean
    user: UserCreateNestedOneWithoutCandidateProfileInput
    candidateEducation?: CandidateEducationCreateNestedManyWithoutCandidateProfileInput
    candidateSkills?: CandidateSkillCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileUncheckedCreateWithoutCandidateLanguageInput = {
    id?: string
    userId: string
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthDate: Date | string
    address: string
    status?: boolean
    openToWork?: boolean
    candidateEducation?: CandidateEducationUncheckedCreateNestedManyWithoutCandidateProfileInput
    candidateSkills?: CandidateSkillUncheckedCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileCreateOrConnectWithoutCandidateLanguageInput = {
    where: CandidateProfileWhereUniqueInput
    create: XOR<CandidateProfileCreateWithoutCandidateLanguageInput, CandidateProfileUncheckedCreateWithoutCandidateLanguageInput>
  }

  export type LanguageCreateWithoutCandidateLanguageInput = {
    name: string
  }

  export type LanguageUncheckedCreateWithoutCandidateLanguageInput = {
    name: string
  }

  export type LanguageCreateOrConnectWithoutCandidateLanguageInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutCandidateLanguageInput, LanguageUncheckedCreateWithoutCandidateLanguageInput>
  }

  export type CandidateProfileUpsertWithoutCandidateLanguageInput = {
    update: XOR<CandidateProfileUpdateWithoutCandidateLanguageInput, CandidateProfileUncheckedUpdateWithoutCandidateLanguageInput>
    create: XOR<CandidateProfileCreateWithoutCandidateLanguageInput, CandidateProfileUncheckedCreateWithoutCandidateLanguageInput>
    where?: CandidateProfileWhereInput
  }

  export type CandidateProfileUpdateToOneWithWhereWithoutCandidateLanguageInput = {
    where?: CandidateProfileWhereInput
    data: XOR<CandidateProfileUpdateWithoutCandidateLanguageInput, CandidateProfileUncheckedUpdateWithoutCandidateLanguageInput>
  }

  export type CandidateProfileUpdateWithoutCandidateLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCandidateProfileNestedInput
    candidateEducation?: CandidateEducationUpdateManyWithoutCandidateProfileNestedInput
    candidateSkills?: CandidateSkillUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileUncheckedUpdateWithoutCandidateLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    candidateEducation?: CandidateEducationUncheckedUpdateManyWithoutCandidateProfileNestedInput
    candidateSkills?: CandidateSkillUncheckedUpdateManyWithoutCandidateProfileNestedInput
  }

  export type LanguageUpsertWithoutCandidateLanguageInput = {
    update: XOR<LanguageUpdateWithoutCandidateLanguageInput, LanguageUncheckedUpdateWithoutCandidateLanguageInput>
    create: XOR<LanguageCreateWithoutCandidateLanguageInput, LanguageUncheckedCreateWithoutCandidateLanguageInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutCandidateLanguageInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutCandidateLanguageInput, LanguageUncheckedUpdateWithoutCandidateLanguageInput>
  }

  export type LanguageUpdateWithoutCandidateLanguageInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageUncheckedUpdateWithoutCandidateLanguageInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateEducationCreateWithoutEducationInput = {
    major: string
    degree?: $Enums.DEGREE
    startYear: Date | string
    endYear: Date | string
    candidateProfile: CandidateProfileCreateNestedOneWithoutCandidateEducationInput
  }

  export type CandidateEducationUncheckedCreateWithoutEducationInput = {
    candidateProfileId: string
    major: string
    degree?: $Enums.DEGREE
    startYear: Date | string
    endYear: Date | string
  }

  export type CandidateEducationCreateOrConnectWithoutEducationInput = {
    where: CandidateEducationWhereUniqueInput
    create: XOR<CandidateEducationCreateWithoutEducationInput, CandidateEducationUncheckedCreateWithoutEducationInput>
  }

  export type CandidateEducationCreateManyEducationInputEnvelope = {
    data: CandidateEducationCreateManyEducationInput | CandidateEducationCreateManyEducationInput[]
    skipDuplicates?: boolean
  }

  export type CandidateEducationUpsertWithWhereUniqueWithoutEducationInput = {
    where: CandidateEducationWhereUniqueInput
    update: XOR<CandidateEducationUpdateWithoutEducationInput, CandidateEducationUncheckedUpdateWithoutEducationInput>
    create: XOR<CandidateEducationCreateWithoutEducationInput, CandidateEducationUncheckedCreateWithoutEducationInput>
  }

  export type CandidateEducationUpdateWithWhereUniqueWithoutEducationInput = {
    where: CandidateEducationWhereUniqueInput
    data: XOR<CandidateEducationUpdateWithoutEducationInput, CandidateEducationUncheckedUpdateWithoutEducationInput>
  }

  export type CandidateEducationUpdateManyWithWhereWithoutEducationInput = {
    where: CandidateEducationScalarWhereInput
    data: XOR<CandidateEducationUpdateManyMutationInput, CandidateEducationUncheckedUpdateManyWithoutEducationInput>
  }

  export type CandidateProfileCreateWithoutCandidateEducationInput = {
    id?: string
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthDate: Date | string
    address: string
    status?: boolean
    openToWork?: boolean
    user: UserCreateNestedOneWithoutCandidateProfileInput
    candidateLanguage?: CandidateLanguageCreateNestedManyWithoutCandidateProfileInput
    candidateSkills?: CandidateSkillCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileUncheckedCreateWithoutCandidateEducationInput = {
    id?: string
    userId: string
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthDate: Date | string
    address: string
    status?: boolean
    openToWork?: boolean
    candidateLanguage?: CandidateLanguageUncheckedCreateNestedManyWithoutCandidateProfileInput
    candidateSkills?: CandidateSkillUncheckedCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileCreateOrConnectWithoutCandidateEducationInput = {
    where: CandidateProfileWhereUniqueInput
    create: XOR<CandidateProfileCreateWithoutCandidateEducationInput, CandidateProfileUncheckedCreateWithoutCandidateEducationInput>
  }

  export type EducationCreateWithoutCandidateEducationInput = {
    id?: string
    name: string
    map: string
  }

  export type EducationUncheckedCreateWithoutCandidateEducationInput = {
    id?: string
    name: string
    map: string
  }

  export type EducationCreateOrConnectWithoutCandidateEducationInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutCandidateEducationInput, EducationUncheckedCreateWithoutCandidateEducationInput>
  }

  export type CandidateProfileUpsertWithoutCandidateEducationInput = {
    update: XOR<CandidateProfileUpdateWithoutCandidateEducationInput, CandidateProfileUncheckedUpdateWithoutCandidateEducationInput>
    create: XOR<CandidateProfileCreateWithoutCandidateEducationInput, CandidateProfileUncheckedCreateWithoutCandidateEducationInput>
    where?: CandidateProfileWhereInput
  }

  export type CandidateProfileUpdateToOneWithWhereWithoutCandidateEducationInput = {
    where?: CandidateProfileWhereInput
    data: XOR<CandidateProfileUpdateWithoutCandidateEducationInput, CandidateProfileUncheckedUpdateWithoutCandidateEducationInput>
  }

  export type CandidateProfileUpdateWithoutCandidateEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCandidateProfileNestedInput
    candidateLanguage?: CandidateLanguageUpdateManyWithoutCandidateProfileNestedInput
    candidateSkills?: CandidateSkillUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileUncheckedUpdateWithoutCandidateEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    candidateLanguage?: CandidateLanguageUncheckedUpdateManyWithoutCandidateProfileNestedInput
    candidateSkills?: CandidateSkillUncheckedUpdateManyWithoutCandidateProfileNestedInput
  }

  export type EducationUpsertWithoutCandidateEducationInput = {
    update: XOR<EducationUpdateWithoutCandidateEducationInput, EducationUncheckedUpdateWithoutCandidateEducationInput>
    create: XOR<EducationCreateWithoutCandidateEducationInput, EducationUncheckedCreateWithoutCandidateEducationInput>
    where?: EducationWhereInput
  }

  export type EducationUpdateToOneWithWhereWithoutCandidateEducationInput = {
    where?: EducationWhereInput
    data: XOR<EducationUpdateWithoutCandidateEducationInput, EducationUncheckedUpdateWithoutCandidateEducationInput>
  }

  export type EducationUpdateWithoutCandidateEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    map?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUncheckedUpdateWithoutCandidateEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    map?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateSkillCreateWithoutSkillInput = {
    candidateProfile: CandidateProfileCreateNestedOneWithoutCandidateSkillsInput
  }

  export type CandidateSkillUncheckedCreateWithoutSkillInput = {
    candidateProfileId: string
  }

  export type CandidateSkillCreateOrConnectWithoutSkillInput = {
    where: CandidateSkillWhereUniqueInput
    create: XOR<CandidateSkillCreateWithoutSkillInput, CandidateSkillUncheckedCreateWithoutSkillInput>
  }

  export type CandidateSkillCreateManySkillInputEnvelope = {
    data: CandidateSkillCreateManySkillInput | CandidateSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type CandidateSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: CandidateSkillWhereUniqueInput
    update: XOR<CandidateSkillUpdateWithoutSkillInput, CandidateSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<CandidateSkillCreateWithoutSkillInput, CandidateSkillUncheckedCreateWithoutSkillInput>
  }

  export type CandidateSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: CandidateSkillWhereUniqueInput
    data: XOR<CandidateSkillUpdateWithoutSkillInput, CandidateSkillUncheckedUpdateWithoutSkillInput>
  }

  export type CandidateSkillUpdateManyWithWhereWithoutSkillInput = {
    where: CandidateSkillScalarWhereInput
    data: XOR<CandidateSkillUpdateManyMutationInput, CandidateSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type CandidateProfileCreateWithoutCandidateSkillsInput = {
    id?: string
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthDate: Date | string
    address: string
    status?: boolean
    openToWork?: boolean
    user: UserCreateNestedOneWithoutCandidateProfileInput
    candidateLanguage?: CandidateLanguageCreateNestedManyWithoutCandidateProfileInput
    candidateEducation?: CandidateEducationCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileUncheckedCreateWithoutCandidateSkillsInput = {
    id?: string
    userId: string
    fullName: string
    gender: $Enums.Gender
    phone: string
    cv: string
    birthDate: Date | string
    address: string
    status?: boolean
    openToWork?: boolean
    candidateLanguage?: CandidateLanguageUncheckedCreateNestedManyWithoutCandidateProfileInput
    candidateEducation?: CandidateEducationUncheckedCreateNestedManyWithoutCandidateProfileInput
  }

  export type CandidateProfileCreateOrConnectWithoutCandidateSkillsInput = {
    where: CandidateProfileWhereUniqueInput
    create: XOR<CandidateProfileCreateWithoutCandidateSkillsInput, CandidateProfileUncheckedCreateWithoutCandidateSkillsInput>
  }

  export type skillCreateWithoutCandidateSkillsInput = {
    name: string
  }

  export type skillUncheckedCreateWithoutCandidateSkillsInput = {
    name: string
  }

  export type skillCreateOrConnectWithoutCandidateSkillsInput = {
    where: skillWhereUniqueInput
    create: XOR<skillCreateWithoutCandidateSkillsInput, skillUncheckedCreateWithoutCandidateSkillsInput>
  }

  export type CandidateProfileUpsertWithoutCandidateSkillsInput = {
    update: XOR<CandidateProfileUpdateWithoutCandidateSkillsInput, CandidateProfileUncheckedUpdateWithoutCandidateSkillsInput>
    create: XOR<CandidateProfileCreateWithoutCandidateSkillsInput, CandidateProfileUncheckedCreateWithoutCandidateSkillsInput>
    where?: CandidateProfileWhereInput
  }

  export type CandidateProfileUpdateToOneWithWhereWithoutCandidateSkillsInput = {
    where?: CandidateProfileWhereInput
    data: XOR<CandidateProfileUpdateWithoutCandidateSkillsInput, CandidateProfileUncheckedUpdateWithoutCandidateSkillsInput>
  }

  export type CandidateProfileUpdateWithoutCandidateSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCandidateProfileNestedInput
    candidateLanguage?: CandidateLanguageUpdateManyWithoutCandidateProfileNestedInput
    candidateEducation?: CandidateEducationUpdateManyWithoutCandidateProfileNestedInput
  }

  export type CandidateProfileUncheckedUpdateWithoutCandidateSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phone?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    openToWork?: BoolFieldUpdateOperationsInput | boolean
    candidateLanguage?: CandidateLanguageUncheckedUpdateManyWithoutCandidateProfileNestedInput
    candidateEducation?: CandidateEducationUncheckedUpdateManyWithoutCandidateProfileNestedInput
  }

  export type skillUpsertWithoutCandidateSkillsInput = {
    update: XOR<skillUpdateWithoutCandidateSkillsInput, skillUncheckedUpdateWithoutCandidateSkillsInput>
    create: XOR<skillCreateWithoutCandidateSkillsInput, skillUncheckedCreateWithoutCandidateSkillsInput>
    where?: skillWhereInput
  }

  export type skillUpdateToOneWithWhereWithoutCandidateSkillsInput = {
    where?: skillWhereInput
    data: XOR<skillUpdateWithoutCandidateSkillsInput, skillUncheckedUpdateWithoutCandidateSkillsInput>
  }

  export type skillUpdateWithoutCandidateSkillsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type skillUncheckedUpdateWithoutCandidateSkillsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateLanguageCreateManyCandidateProfileInput = {
    level?: $Enums.Level
    languageName: string
  }

  export type CandidateEducationCreateManyCandidateProfileInput = {
    educationId: string
    major: string
    degree?: $Enums.DEGREE
    startYear: Date | string
    endYear: Date | string
  }

  export type CandidateSkillCreateManyCandidateProfileInput = {
    skillName: string
  }

  export type CandidateLanguageUpdateWithoutCandidateProfileInput = {
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    language?: LanguageUpdateOneRequiredWithoutCandidateLanguageNestedInput
  }

  export type CandidateLanguageUncheckedUpdateWithoutCandidateProfileInput = {
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    languageName?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateLanguageUncheckedUpdateManyWithoutCandidateProfileInput = {
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    languageName?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateEducationUpdateWithoutCandidateProfileInput = {
    major?: StringFieldUpdateOperationsInput | string
    degree?: EnumDEGREEFieldUpdateOperationsInput | $Enums.DEGREE
    startYear?: DateTimeFieldUpdateOperationsInput | Date | string
    endYear?: DateTimeFieldUpdateOperationsInput | Date | string
    education?: EducationUpdateOneRequiredWithoutCandidateEducationNestedInput
  }

  export type CandidateEducationUncheckedUpdateWithoutCandidateProfileInput = {
    educationId?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    degree?: EnumDEGREEFieldUpdateOperationsInput | $Enums.DEGREE
    startYear?: DateTimeFieldUpdateOperationsInput | Date | string
    endYear?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateEducationUncheckedUpdateManyWithoutCandidateProfileInput = {
    educationId?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    degree?: EnumDEGREEFieldUpdateOperationsInput | $Enums.DEGREE
    startYear?: DateTimeFieldUpdateOperationsInput | Date | string
    endYear?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateSkillUpdateWithoutCandidateProfileInput = {
    skill?: skillUpdateOneRequiredWithoutCandidateSkillsNestedInput
  }

  export type CandidateSkillUncheckedUpdateWithoutCandidateProfileInput = {
    skillName?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateSkillUncheckedUpdateManyWithoutCandidateProfileInput = {
    skillName?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateLanguageCreateManyLanguageInput = {
    candidateProfileId: string
    level?: $Enums.Level
  }

  export type CandidateLanguageUpdateWithoutLanguageInput = {
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    candidateProfile?: CandidateProfileUpdateOneRequiredWithoutCandidateLanguageNestedInput
  }

  export type CandidateLanguageUncheckedUpdateWithoutLanguageInput = {
    candidateProfileId?: StringFieldUpdateOperationsInput | string
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
  }

  export type CandidateLanguageUncheckedUpdateManyWithoutLanguageInput = {
    candidateProfileId?: StringFieldUpdateOperationsInput | string
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
  }

  export type CandidateEducationCreateManyEducationInput = {
    candidateProfileId: string
    major: string
    degree?: $Enums.DEGREE
    startYear: Date | string
    endYear: Date | string
  }

  export type CandidateEducationUpdateWithoutEducationInput = {
    major?: StringFieldUpdateOperationsInput | string
    degree?: EnumDEGREEFieldUpdateOperationsInput | $Enums.DEGREE
    startYear?: DateTimeFieldUpdateOperationsInput | Date | string
    endYear?: DateTimeFieldUpdateOperationsInput | Date | string
    candidateProfile?: CandidateProfileUpdateOneRequiredWithoutCandidateEducationNestedInput
  }

  export type CandidateEducationUncheckedUpdateWithoutEducationInput = {
    candidateProfileId?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    degree?: EnumDEGREEFieldUpdateOperationsInput | $Enums.DEGREE
    startYear?: DateTimeFieldUpdateOperationsInput | Date | string
    endYear?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateEducationUncheckedUpdateManyWithoutEducationInput = {
    candidateProfileId?: StringFieldUpdateOperationsInput | string
    major?: StringFieldUpdateOperationsInput | string
    degree?: EnumDEGREEFieldUpdateOperationsInput | $Enums.DEGREE
    startYear?: DateTimeFieldUpdateOperationsInput | Date | string
    endYear?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateSkillCreateManySkillInput = {
    candidateProfileId: string
  }

  export type CandidateSkillUpdateWithoutSkillInput = {
    candidateProfile?: CandidateProfileUpdateOneRequiredWithoutCandidateSkillsNestedInput
  }

  export type CandidateSkillUncheckedUpdateWithoutSkillInput = {
    candidateProfileId?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateSkillUncheckedUpdateManyWithoutSkillInput = {
    candidateProfileId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}