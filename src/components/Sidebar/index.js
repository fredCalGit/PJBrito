import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="sobre" onClick={toggle}>
                        Sobre
                    </SidebarLink>
                    <SidebarLink to="conheca" onClick={toggle}>
                        Conheça
                    </SidebarLink>
                   
                    <SidebarLink to="servicos" onClick={toggle}>
                        Serviços
                    </SidebarLink>
                    <SidebarLink to="local" onClick={toggle}>
                        Localizaçao
                    </SidebarLink>
                    
                
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact">Fale Conosco</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>

    )
}
    
export default Sidebar
