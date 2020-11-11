interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    }
  }
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'reginaldo@wolfandpartners.com.br',
      name: 'Reginaldo Morikawa',
    }
  }
} as IMailConfig;
