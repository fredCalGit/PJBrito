import React from 'react'

import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import Icon4 from '../../images/svg-7.svg'
import Icon5 from '../../images/svg-8.svg'
import Icon6 from '../../images/svg-9.svg'
import Icon7 from '../../images/svg-10.svg'

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id="servicos">
            <ServicesH1>Nossos Serviços</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Contabilidade</ServicesH2>
                    <ServicesP>
                    Organizar e desenvolver informações que possibilitem orientar o cliente na gestão de sua empresa, como parceiro na tomada de decisões e implementações de projetos. 
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Contabilidade para PF</ServicesH2>
                    <ServicesP>
                    Escrituração de livro caixa para profissionais liberais, Imposto de Renda, análise tributária entre pessoas físicas e jurídicas, apuração de ganho de capital na venda de imóveis.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon7}/>
                    <ServicesH2>Fiscal Tributário</ServicesH2>
                    <ServicesP>
                    Planejamento tributário, Assessoria no controle de estoques e ativo imobilizado, parcelamentos, compensações e restituições de tributos. 
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Recursos Humanos</ServicesH2>
                    <ServicesP>
                    Assessoria em operações de contratação, rescisões, elaboração de folha de pagamento. 
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    <ServicesH2>Escritorio Virtual</ServicesH2>
                    <ServicesP>
                    Fornecemos toda a documentação necessária para abertura da sede do seu empreendimento em nosso endereço fiscal com o objetivo de agilizar e reduzir seus custos. 
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Gestão da folha de empregados domésticos</ServicesH2>
                    <ServicesP>
                    Elaboraramos a folha do seu empregado doméstico e fornecemos as orientações sobre a legislação que rege esta modalidade. 
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services