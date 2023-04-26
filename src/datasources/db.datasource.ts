import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const pass = encodeURIComponent('YourPrimaryKey');

const Passwordconfig = {
  name: 'db',
  connector: 'mongodb',
  url:
    'mongodb://cosmosbookstorew4zuqbndb3qfq:' + pass + 'restofconnectionstring',
  host: 'cosmosbookstorew4zuqbndb3qfq.mongo.cosmos.azure.com',
  port: 10255,
  useNewUrlParser: true,
  ssl: true,
};

//replace username and password

// const RBACconfig = {
//   name: 'db',
//   connector: 'mongodb',
//   url: 'mongodb://username:password@cosmosbookstorew4zuqbndb3qfq.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@cosmosbookstorew4zuqbndb3qfq@',
//   host: 'cosmosbookstorew4zuqbndb3qfq.mongo.cosmos.azure.com',
//   port: 10255,
//   database: 'cosmicworks',
//   useNewUrlParser: true,
//   authMechanism: 'SCRAM-SHA-256',
//   ssl: true,
//   authSource: 'cosmicworks',
// };

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  // replace Passwordconfig or RBAC config
  static dataSourceName = 'db';
  static readonly defaultConfig = Passwordconfig;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = Passwordconfig,
  ) {
    super(dsConfig);
  }
}
