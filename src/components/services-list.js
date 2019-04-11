/**
 * ID: Just needs to be unique (to each service) and one word
 * Type: [ 'feature', 'row', 'featurette' ]
 */

export default {
    consulting: {
        icon: '/img/home/strategic_2x.png',
        title: 'Security Consulting',
        showDescription: 'Highly skilled and experienced consultants providing trusted security advice and guidance.',
        description: 'With so many different threats to deal with and a multitude of products that claim to solve the security puzzle, just understanding your next security move can be difficult. TSS can help ensure organisations spend their security budget wisely through using one or more of the following services.',
        quote: 'Security Posture Snapshot is our flagship consulting service that provides a prioritised and budgeted road map to improved business resilience.',
        list: [
            {
                id: 'securitysnapshot',
                icon: '/img/services/strategic/SPS.png',
                image: '/img/services/strategic/SPS@2x.png',
                eyebrow: 'Security',
                title: 'Posture Snapshot',
                paragraph: 'TSS’ security posture snapshot is our flagship service providing organisations with a high-level cyber threat and resilience assessment designed to identify the security issues that require further effort to raise security standards to a level commensurate with the threats to the particular business.<br /><br />The result is a base-lined and prioritised security roadmap that lays out a clear path to improved security while minimising cost and disruption to the business. Recommendations are ranked according to their security effectiveness, initial cost, ongoing cost and cultural resistance, so as to enable the business to make informed decisions about future security spending.',
                footerTitle: 'Security Posture Snapshot',
                type: 'feature',
                violator: true,
                side: 'left',
                showInFooter: true
            },
            {
                id: 'grc',
                image: '/img/services/strategic/team@2x.png',
                icon: '/img/services/strategic/grc.png',
                eyebrow: 'Governance,',
                title: 'Risk and Compliance (GRC)',
                paragraph: 'TSS GRC services are designed to assist an organisation’s executives and management team to develop or enhance an overall program to manage business risk. Our specialised cyber security experts will provide an independent assessment of an organisation’s current information security program and policies, which can lead to better risk mitigation and business delivery optimisation, and enhanced communication and elevated reputational advantage. Our GRC services can provide organisations with a baseline assessment against ASD ISM, Essential 8, ISO 27001/2, SOC, PCI, COBIT or NIST, or any other outcome required.<br /><br />TSS can also review or develop Security Threat Governance Frameworks, Threat and Risk Assessments, Security Risk Management Plans and other documentation necessary to meet regulatory or compliance requirements.',
                footerTitle: 'Governance, Risk and Compliance (GRC)',
                type: 'row',
                violator: false,
                side: 'left',
                showInFooter: true
            },
            {
                id: 'sar',
                image: '/img/services/strategic/sar@2x.png',
                icon: '/img/services/strategic/sar.png',
                eyebrow: 'Security',
                title: 'Architecture Review',
                paragraph: 'TSS’ security architecture review provides organisations with an expert review of architectural designs to ensure appropriate security controls are implemented and systems are appropriately resilient to cyber attack.  TSS can focus its evaluation efforts in a detailed manner on an organisation’s more sensitive and critical information assets.',
                footerTitle: 'Security Architecture and Review',
                type: 'row',
                violator: false,
                side: 'right',
                showInFooter: true
            },
            {
                id: 'vsa',
                image: '/img/services/strategic/v_cisoitsa_v3@2x.png',
                icon: '/img/services/strategic/vcisoitsa.png',
                eyebrow: 'Virtual',
                title: 'Security Advisor',
                paragraph: 'A service to provide you access to a pool of experienced information security professionals with experience in CISO, ITSA and/or strategic advisory roles. You can leverage this service for liaison with regulators, board advisory consulting and general cyber-security expertise.',
                footerTitle: 'Virtual Security Advisor',
                type: 'row',
                violator: false,
                side: 'left',
                showInFooter: true
            },
            {
                id: 'incidentresponse',
                image: 'https://i.imgur.com/ZS38dsS.png',
                icon: '/img/services/strategic/irp.png',
                eyebrow: 'Incident',
                title: 'Response Planning',
                paragraph: 'Under this service, TSS will develop a customised set of Playbooks and Incident Response plans for responding to and limiting the effects of cyber security incidents against an organisation. TSS response plans are tailored to your specific business requirements and resources to ensure they are actionable and implementable, will limit damage, improve recovery time and help safeguard your business, as well as minimise the likelihood of receiving regulatory penalties in the event of a breach.',
                footerTitle: 'Incident Response Planning',
                type: 'featurette',
                violator: false,
                side: 'left',
                showInFooter: true
            },
            {
                id: 'attacksim',
                image: 'https://i.imgur.com/ZS38dsS.png',
                icon: '/img/services/strategic/tabletop.png',
                eyebrow: 'Tabletop',
                title: 'Attack Simulation',
                paragraph: 'TSS’ tabletop attack simulations are designed to scrutinise and uplift an organisation’s response and defence capability through a paper-based and face-to-face simulation of a targeted attack against an organisation’s IT environment. They allow a team to come together in a low-stress environment and assess their procedures and plans against Employee Behaviours, Infrastructure Resilience, Program Resources and External Threats.  ',
                footerTitle: 'Tabletop Attack Simulation',
                type: 'featurette',
                violator: false,
                side: 'left',
                showInFooter: true
            }
        ]
    },
    mso: {
        icon: '/img/home/tactical_2x.png',
        title: 'Managed Security',
        showDescription: 'Industry leading innovation in agile devops and robotic process automation.',
        description: "A blend of machine automation and highly skilled analysts, focused on protecting your organisation's key IT assets, 24 hours a day, 365&nbsp;days&nbsp;a&nbsp;year.",
        quote: 'Our Managed Security Services uses our Smart SOC to blend machine automation and our highly skilled analysts to protect your organisation 24×7&nbsp;/&nbsp;365.',
        list: [
            {
                id: 'siemaas',
                image: '/img/services/tactical/saas_v2@2x.png',
                icon: '/img/services/tactical/siemaas.png',
                eyebrow: 'SIEM',
                title: 'as a Service',
                paragraph: 'TSS operates a 24x7x365 Cyber Security Operations Centre rated to store and service Australian Government networks up to <b>PROTECTED</b> level. Our SIEM monitoring and alerting service minimises business risk associated with the entire spectrum of cyber incidents; particularly targeted, persistent and sophisticated cyber intrusions.',
                footerTitle: 'SIEM as a Service',
                type: 'feature',
                violator: true,
                side: 'left',
                showInFooter: true
            },
            {
                id: 'vulnerabilityscanning',
                image: '/img/services/tactical/vuln@2x.png',
                icon: '/img/services/tactical/va.png',
                eyebrow: 'Vulnerability',
                title: 'Assessment',
                paragraph: 'A vulnerability assessment comprises a cyclical process to identify, classify and scan key assets. The process generates monthly tailored reporting so clients can remediate or mitigate identified vulnerabilities.',
                footerTitle: 'Vulnerability Assessment',
                type: 'row',
                violator: false,
                side: 'right',
                showInFooter: true
            },
            {
                id: 'epdar',
                image: '/img/services/tactical/edpr@2x.png',
                icon: '/img/services/tactical/epdr.png',
                eyebrow: 'Endpoint',
                title: 'Detection and Response',
                paragraph: 'EDR is our service that addresses the need for continuous monitoring and response to advanced threats. The service is primarily focused on detecting and investigating suspicious activities (and traces of such), and other problems on hosts and endpoints.',
                footerTitle: 'Endpoint Detection and Response',
                type: 'row',
                violator: false,
                side: 'left',
                showInFooter: true
            },
            {
                id: 'th',
                image: 'https://i.imgur.com/ZS38dsS.png',
                icon: '/img/services/tactical/threat.png',
                eyebrow: 'Threat',
                title: 'Hunting',
                paragraph: 'TSS’ knowledge of adversary tools, techniques and procedures combined with our experience in both offensive and defensive cyber operations allows us to collect, analyse and identify malicious threat indicators. Sources include, but are not limited to, private access sharing groups, open source forums, dark web and private intelligence feeds. The intelligence garnered can be used to uplift your security posture or when leveraged with EDR becomes an effective advanced threat protection.',
                footerTitle: 'Threat Hunting',
                type: 'featurette',
                violator: false,
                side: 'left',
                showInFooter: true
            },
            {
                id: 'dwm',
                image: 'https://i.imgur.com/ZS38dsS.png',
                icon: '/img/services/tactical/drp.png',
                eyebrow: 'Digital',
                title: 'Risk Protection',
                paragraph: 'Dark web sites are the meeting and market places for emerging cyber threats. Digital Risk Protection provides a rich source of intelligence, often relevant to a broad spectrum of potential targets that aren’t accessible through conventional monitoring.',
                footerTitle: 'Digital Risk Protection',
                type: 'featurette',
                violator: false,
                side: 'left',
                showInFooter: true
            }
        ]
    },
    securitytesting: {
        icon: '/img/home/operational_2x.png',
        title: 'Security Testing',
        showDescription: 'Accomplished ethical hackers that can emulate real world threat actors.',
        description: "Our <b>Red Teaming</b>, <b>Pentesting</b> and <b>Secure Code Review</b> division – We emulate real world cyber adversaries, to both test your organisation's security controls and help you understand likely attack vectors so you can better prepare to prevent and resist future attacks.",
        quote: "Our Red Teaming, Pentesting and Secure Code Review Services emulates real-world adversaries, to both test your organisation's security controls and help you understand likely attack vectors so you can better prepare to prevent and resist future attacks.",
        list: [
            {
                id: 'redteaming',
                image: '/img/services/operational/redteaming.png',
                icon: '/img/services/operational/redteaming.png',
                eyebrow: 'Red',
                title: 'Teaming',
                paragraph: 'A simulated cyber-intrusion that mimics a targeted attack against your organisation, based on methods and techniques successfully employed by real-world attackers today, but in a trusted and controlled manner. We offer a tailored service that can include physical access and social engineering based testing in conjunction with traditional technology based attack techniques.',
                footerTitle: 'Red Teaming',
                type: 'feature',
                violator: true,
                side: 'left',
                showInFooter: true
            },
            {
                id: 'pentesting',
                image: '/img/services/operational/pentesting.png',
                icon: '/img/services/operational/pentesting.png',
                eyebrow: 'Penetration',
                title: 'Testing',
                paragraph: 'A deeply technical hands on systematic test of each application or system in scope. This systematic review provides a thorough understanding of the technical risk presented by an application or system.',
                footerTitle: 'Penetration Testing',
                type: 'feature',
                violator: true,
                side: 'left',
                showInFooter: true
            },
            {
                id: 'iot',
                image: 'https://i.imgur.com/Ej4WQwJ.png',
                icon: '/img/services/operational/iot.png',
                eyebrow: 'IoT Security',
                title: 'Testing',
                paragraph: 'An in-depth security analysis of IoT solutions focusing on the hardware, software and end-to-end solution. This assessment gives clients a holistic understanding of the security threats posed by IoT solutions right from the silicon layer to the user interactions and data flows.',
                footerTitle: 'IoT Security Testing',
                type: 'row',
                violator: false,
                side: 'right',
                showInFooter: true
            },
            {
                id: 'ics',
                image: 'https://i.imgur.com/Ej4WQwJ.png',
                icon: '/img/services/operational/otics.png',
                eyebrow: 'OT/ICS',
                title: 'Security Testing',
                paragraph: 'A comprehensive assessment of the real-world impact an attacker can have on an Operational Technology (OT) or Industrial Control Systems (ICS) environment. TSS employ a hands on, technical but measured approach to assessing OT/ICS systems to ensure security issues can be discovered efficiently and effectively without negatively impacting real world systems and organisations.',
                footerTitle: 'OT/ICS Security Testing',
                type: 'featurette',
                violator: false,
                side: 'left',
                showInFooter: true
            },
            {
                id: 'hva',
                image: 'https://i.imgur.com/ZS38dsS.png',
                icon: '/img/services/operational/hva.png',
                eyebrow: 'Hardware',
                title: 'Vulnerability Assessment',
                paragraph: 'A low-level, technical and hands on assessment of the security posture of a hardware device with a focus on vulnerabilities that can impact an organisation or solution. TSS will analyse the target hardware with a range of cutting edge hardware hacking techniques and provide a balanced assessment of the risk the hardware device poses to the organisation.',
                footerTitle: 'Hardware Vulnerability Assessment',
                type: 'featurette',
                violator: false,
                side: 'left',
                showInFooter: true
            },
            {
                id: 'codereview',
                image: 'https://i.imgur.com/ZS38dsS.png',
                icon: '/img/services/operational/code_review.png',
                eyebrow: 'Code',
                title: 'Review',
                paragraph: 'A secure code review is a manual assessment of your application’s source code, directed by extensive experience and automated source-code scanning tools to focus our attention on the key security-relevant areas of the application.',
                footerTitle: 'Code Review',
                type: 'featurette',
                violator: false,
                side: 'left',
                showInFooter: true
            }
        ]
    }
}
