# gobarber-backend
GoBarber backend made with #Nodejs

# Recuperaão de senha

**RF**

- O usuario deve poder recupera sua senha informando o seu e-mail;
- O usuario deve receber um email com instrucoes de recuperacao de senha;
- O usuario deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar o Amazon SES para envios em producao;
- O envio de emails deve acontecer em segundo plano (background job);
-

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuario precisa confirmar a nova senha ao resetar sua senha;


# Atualizacao do perfil

**RF**

- O usuario deve poder atualizar seu nome, email e senha;

**RN**

- O usuario nao pode alterar o seu email para um email ja utilizado;
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- Para atualizar sua senha, o usuario precisa confirmar a nova senha;

# Painel do prestador

# Agendamento de servicos

