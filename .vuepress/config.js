import { defineUserConfig, defaultTheme } from 'vuepress';

export default defineUserConfig({
    lang: 'zh-CN',
    title: '深入架构原理与落地实践',
    description: '高可用服务体系原理与实践',
    head: [
        ['link', { rel: "shortcut icon", href: "/assets/favicon.ico" }],

        [ 'script', {}, `
     var _hmt = _hmt || [];
   (function() {
 var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?e84cbf587012e6a1376a6d69805d5aa2";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })(); 
     `
 ]
    ],
    plugins: [],
    theme: defaultTheme({
        navbar: [{
                text: '首页',
                link: '/'
            },
            {
                text: '讨论',
                link: 'https://github.com/isno/theByteBook/discussions'
            },

            {
                text: 'GitHub仓库',
                link: 'https://github.com/isno/theByteBook'
            }
        ],
        sidebar: [
            '/intro.md',
            {
                text: '第一章：云技术概论',
                link: "/architecture/summary.md",
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/architecture/migrate-cloud.md',
                    '/architecture/define-cloud-native.md',
                 
                    {
                        text: '1.2 云技术方案选型',
                        link: '/architecture/selection.md',
                        children: [
                           '/architecture/aliyun.md',
                           '/architecture/tencent.md',
                           '/architecture/rancher.md',
                           '/architecture/cloud-contrast.md'
                        ]
                    },

                    '/architecture/arc.md',
                    '/architecture/arc-guide.md'
                ]
            },
            {
                text: '第二章：基础网络与应用实践',
                collapsable: true,
                link: '/network/summary.md',
                sidebarDepth: 2,
                children: [
                    '/network/latency.md',
                     {
                        text: '2.2 Linux 内核网络',
                        link: "/network/linux-kernel-networking.md",
                        children: [
                            '/network/tcp.md',
                        ]
                    },
                    {
                        text: '基础网络',
                        link: "/content/chapter1/underlay.md",
                        children: [
                            '/content/chapter1/bgp.md',
                            '/content/chapter1/anycast.md',
                            '/content/chapter1/congestion-control.md'
                        ]
                    },
                    {
                        text: '网络虚拟化',
                        link: "/content/chapter1/SDN.md",
                        children: [
                            '/content/chapter1/network-namespace.md',
                            '/content/chapter1/veth-pair.md',
                            '/content/chapter1/bridge.md',
                            '/content/chapter1/route.md',
                            '/content/chapter1/tun.md',
                            '/content/chapter1/vxlan.md'
                        ]
                    },
                    '/network/netfilter.md',
                    {
                        text: '网络优化指南',
                        link: "/content/chapter1/net-optimize-intro.md",
                        children: [
                            '/network/kernel.md',
                            {
                                text: "传输层优化",
                                link: "/content/chapter1/transport.md",
                                children: [
                                    '/content/chapter1/tcp-handshake.md',
                                    '/content/chapter1/tcp-handwave.md',
                                    '/network/bbr.md',
                                ]
                            },
                            '/network/kernel-bypass.md'
                        ]
                    },

                    {
                        text: '网络关键指标及观测指南',
                        link: "/network/observation.md",
                        children: [
                            '/network/mtr.md',
                            '/network/tcpdump.md'
                        ]
                    },
                ]
            },
            {
                text: '第三章：应用层服务原理及优化指南',
                link: "/http/summary.md",
                collapsable: false,
                sidebarDepth: 1,
                children: [
                   
                    '/http/latency.md',
                    {
                        text: '3.2 DNS 的原理与应用',
                        link:  '/http/dns.md',
       
                        children: [
                            '/http/http-dns.md',
                            '/http/dns-ha.md',
                        ]
                    },
                    {
                        text: '3.3 HTTP 服务优化指南',
                        link:  '/http/http-performance.md',
       
                        children: [
                            '/http/compress.md',
                            '/http/quic.md',
                            '/http/nginx-quic.md',
                            //'/http/quic-performance.md'
                        ]
                    },
                    {
                        text: '3.4 HTTPS 原理及 SSL 优化实践',
                        link:  '/http/https-summary.md',
                        children: [
                            '/http/https.md',
                            '/http/ssl.md',
                            '/http/ssl-performance.md',
                        ]
                    },
                    '/http/Edge-Acceleration.md',
                    '/http/protobuf.md'
                ]
            },
            {
                text: '第四章：负载均衡与网关架构实践',
                link: '/api-gateway/intro.md',
                collapsable: false,
                sidebarDepth: 1,
                children: [{
                        text: "四层负载均衡",
                        link: '/api-gateway/balance4.md',
                        children: [
                            '/api-gateway/LVS.md',
                            '/api-gateway/lvs-mod.md',
                            '/api-gateway/lvs-balance.md'
                        ]
                    },
                    {
                        text: "七层负载均衡",
                        link: '/api-gateway/balance7.md',
                        children: [
                            '/api-gateway/nginx-conf.md'
                        ]
                    },
                    {
                        text: "网关的理解与实践",
                        link: '/api-gateway/api-gateway.md',
                        children: [
                            '/api-gateway/OpenResty.md',
                            '/api-gateway/limit.md',
                            '/api-gateway/openresty-module.md',
                            '/api-gateway/openresty-fire.md'
                        ]
                    },
                ]
            },
            {
                text: "第五章：分布式系统理论与实践",
                link: '/distributed-system/distributed-transaction.md',
                children: [
                    '/distributed-system/BASE.md',
                    '/distributed-system/cap.md',
                    '/distributed-system/ACID.md',
                    '/distributed-system/idempotent.md',
                     {
                        text: "5.5 分布式事务协议与解决",
                        link: '/distributed-system/transaction.md',
                        children: [
                            '/distributed-system/compensate.md',
                            '/distributed-system/2PC.md',
                            '/distributed-system/XA.md',
                            '/distributed-system/TCC.md',
                            '/distributed-system/Saga.md',
                            '/distributed-system/Seata.md'
                        ]
                    },
                    {
                        text: "5.6 分布式集群共识问题",
                        link: '/distributed-system/consistency.md',
                        children: [
                            '/distributed-system/consensus.md',
                            '/distributed-system/raft.md',
                        ]
                    },
                ]
            },
            {
                text: '第六章：从消息到事件流',
                link: '/MessageQueue/intro.md',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/MessageQueue/mq-diff.md',
                    '/MessageQueue/mq-benchmark.md'
                ]
            },
            {
                text: '第七章：容器技术概括及应用',
                link: '/container/summary.md',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/container/container.md',
                    {
                        text: '7.2 容器技术的核心原理',
                        link: '/container/principle.md',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            '/container/namespace.md',
                            '/container/cgroups.md',
                            '/container/unionfs.md'
                        ]
                    },

                    '/container/OCI.md',
                    {
                        text: '7.4 容器镜像',
                        link: '/container/image.md',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            '/container/image-build.md',
                            '/container/Nydus-image.md',
                        ]
                    },
                    {
                        text: '7.5 容器运行时',
                        link: '/container/runtime.md',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            '/container/low-level-runtime.md',
                            '/container/high-level-runtime.md',
                            '/container/kata-containers.md',
                        ]
                    },
                    {
                        text: '7.6 镜像仓库',
                        link: '/container/registry.md',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            '/container/harbor.md',
                            '/container/dragonfly.md'
                        ]
                    },
                    {
                        text: '7.7 容器与kubernetes',
                        link: '/container/container-in-kubernetes.md',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            '/container/CRI-in-Kubernetes.md',
                            '/container/Docker-Kubernetes.md',
                            '/container/RuntimeClass.md'
                        ]
                    },
                    
                ]
            },
            {
                text: '第八章：容器编排系统 Kubernetes',
                link: '/kubernetes/index.md',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/kubernetes/declarative-api.md',
                    '/kubernetes/namespace.md',
                    '/kubernetes/virtual.md',
                    {
                        text: 'Kubernetes 架构与组件',
                        link: '/kubernetes/component.md',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            '/kubernetes/kube-proxy.md',
                        ]
                    },
                    {
                        text: 'Kubernetes 核心资源',
                        link: '/kubernetes/resource.md',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            '/kubernetes/pod.md',
                            '/kubernetes/deployment.md',
                            '/kubernetes/service.md',
                            '/kubernetes/ingress.md',
                            '/kubernetes/pv.md',
                        ]
                    },
                     '/kubernetes/Qos.md',
                    {
                        text: 'Kubernetes 弹性伸缩',
                        link: '/kubernetes/AutoScaling.md',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            
                            '/kubernetes/requests-limits.md',
                        ]
                    },
                   
                    {
                        text: 'Kubernetes 进阶',
                        link: '/kubernetes/AutoScaling.md',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            '/kubernetes/CNI.md',
                            '/kubernetes/CRI.md',
                        ]
                    },
                    {
                        text: '生产级 Kubernetes 高可用部署方案',
                        link: '/kubernetes/install.md',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            '/kubernetes/api-server-ha.md',
                            '/kubernetes/controller-manager-scheduler.md',
                            '/kubernetes/etcd-ha.md'                        ]
                    },

                ]
            },
            {
                text: '第九章：服务治理变革 ServiceMesh',
                collapsable: false,
                sidebarDepth: 1,
                link: '/MicroService/micro-service.md',
                children: [
                    '/MicroService/micro-service-arc.md',
                    {
                        text: "ServiceMesh",
                        link: '/MicroService/ServiceMesh.md',
                        children: [
                            '/MicroService/ServiceMesh-implement.md',
                            '/MicroService/ServiceMesh-Kubernetes.md',

                        ]
                    },
                    '/MicroService/Envoy.md',
                    '/MicroService/Istio.md'
                ]
            },
            {
                text: '第十章：GitOps 的落地与实施',
                link: '/GitOps/intro.md',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/GitOps/GitOps.md',
                    '/GitOps/AoneFlow.md',
                    
                    {
                        text: "基础设施即代码",
                        link: '/GitOps/IaC.md',
                        children: [
                            '/GitOps/Kustomize.md',
                            '/GitOps/Helm.md',
                        ]
                    },
                    '/GitOps/CICD.md',
                    {
                        text: "持续集成",
                        link: '/GitOps/CI.md',
                        children: [
                            '/GitOps/SonarQube.md'
                        ]
                    },
                    {
                        text: "持续交付",
                        link: '/GitOps/CD.md',
                        children: [                         
                           '/GitOps/ArgoCD.md',
                           '/GitOps/Flagger.md'
                        ]
                    },
                ]
            },
            {
                text: '第十一章：架构可观测性',
                link: '/Observability/intro.md',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/Observability/monitor-upgrade.md',
                    '/MicroService/tracing.md'
                ]
            },
            {
                text: '第十二章：Serverless 架构',
                link: '/serverless/summary.md',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/serverless/Knative.md',
                ]
            },
            {
                text: '第十三章：FinOps云成本管理',
                link: '/FinOps/summary.md',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/FinOps/finops-define.md',
                    '/FinOps/framework.md',
                    '/FinOps/finops-for-kubernetes.md',
                    '/FinOps/kubecost.md',
                    '/FinOps/conclusion.md'
                ]
            }
        ]
    })
});