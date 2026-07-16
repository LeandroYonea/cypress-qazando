/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import communsPage from "../support/pages/communsPage"
import cadastroPage from "../support/pages/cadastroPage"

describe('Cadastro de Usuário', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        communsPage.acessarCadastroUsuario()
    });

    it('Campo "Nome" vazio', () => {
        cadastroPage.clicarCadastrar()
        cadastroPage.validarMensagemErro('O campo nome deve ser prenchido')
    });

    it('Campo "E-mail" vazio', () => {
        cadastroPage.preencheNome(faker.name.fullName())
        cadastroPage.clicarCadastrar()
        cadastroPage.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Campo "E-mail" inválido', () => {
        cadastroPage.preencheNome(faker.name.fullName())
        cadastroPage.preencheEmail(faker.name.fullName())
        cadastroPage.clicarCadastrar()
        cadastroPage.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Campo "Senha" vazio', () => {
        cadastroPage.preencheNome(faker.name.fullName())
        cadastroPage.preencheEmail(faker.internet.email())
        cadastroPage.clicarCadastrar()
        cadastroPage.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Campo "Senha" inválido', () => {
        cadastroPage.preencheNome(faker.name.fullName())
        cadastroPage.preencheEmail(faker.internet.email())
        cadastroPage.preencheSenha('123')
        cadastroPage.clicarCadastrar()
        cadastroPage.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Cadastro com sucesso', () => {

        const name = faker.name.fullName()

        cadastroPage.preencheNome(name)
        cadastroPage.preencheEmail(faker.internet.email())
        cadastroPage.preencheSenha('123456')
        cadastroPage.clicarCadastrar()
        cadastroPage.validarMensagemSucesso(name)
    });
})