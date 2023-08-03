import {
    GithubFilled,
    InfoCircleFilled,
    QuestionCircleFilled,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
    PageContainer,
    ProCard,
    ProLayout,
    SettingDrawer,
} from '@ant-design/pro-components';
import React, {useState } from 'react';
import {useNavigate,Outlet} from "react-router-dom";
import {routesData} from "../routeData";

const  defaultProps =    {
    route: {
        path: '/',
        routes:routesData
    },
    location: {
        pathname: '/',
    }
}
export default () => {
    const navigate =useNavigate()
    const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
        layout: "mix",
        navTheme: "light",
        contentWidth: "Fluid",
        fixSiderbar: true,
        colorPrimary: "#1677FF",
        fixedHeader: true
    });

    const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

    return (
        <div
            id="test-pro-layout"
            style={{
                height: '100vh',
            }}
        >
            <ProLayout
                siderWidth={216}
                {...defaultProps}
                location={{
                    pathname,
                }}
                avatarProps={{
                    src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                    title: '七妮妮',
                    size: 'small',
                }}
                actionsRender={(props) => {
                    if (props.isMobile) return [];
                    return [
                        <InfoCircleFilled key="InfoCircleFilled" />,
                        <QuestionCircleFilled key="QuestionCircleFilled" />,
                        <GithubFilled key="GithubFilled" />,
                    ];
                }}
                menuItemRender={(item, dom) => (
                    <div
                        onClick={() => {
                            console.log('item.path:', item.path)
                            navigate(item.path || '/')
                            setPathname(item.path || '/home');
                        }}
                    >
                        {dom}
                    </div>
                )}
                {...settings}
            >
                <PageContainer>
                    <ProCard
                        style={{
                            width:'100vw',
                            height: '100vh',
                            minHeight: 800,
                            minWidth:800,
                        }}
                    >
                        <Outlet />
                    </ProCard>
                </PageContainer>
            </ProLayout>
            <SettingDrawer
                pathname={pathname}
                enableDarkTheme
                getContainer={() => document.getElementById('test-pro-layout')}
                settings={settings}
                onSettingChange={(changeSetting) => {
                    setSetting(changeSetting);
                }}
                disableUrlParams={false}
            />
        </div>
    );
};