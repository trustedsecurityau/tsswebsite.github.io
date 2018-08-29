/**
 * ID: Just needs to be unique (to each service) and one word
 * Type: [ 'feature', 'row', 'featurette' ]
 */

export default {
    consulting: {
        icon: '/img/home/strategic_2x.png',
        title: 'Security Assurance',
        showDescription: 'Our <b>Security Snapshot</b> and <b>Security Architecture Review</b> services',
        description: 'Our <b>Security Snapshot</b> and <b>Security Architecture Review</b> services – We provide a holistic view of organisational security risk, recommendations based on real world threats, and a 6 - 18 month roadmap to implement a security program of works.',
        quote: 'Security Posture Snapshot is our flagship consulting service, delivered a budgeted remediation plan to a number of ASX Top 10 listed companies.',
        list: [
            {
                id: 'securitysnapshot',
	            icon: '/img/services/strategic/SPS.png',
                image: '/img/services/strategic/SPS@2x.png',
                eyebrow: 'Security',
                title: 'Posture Snapshot',
                paragraph: 'A security posture snapshot (SPS) is designed to provide a high-level view of security issues throughout an organisation that require further effort to raise security standards to a level commensurate with threats to the business.<br /><br />The result is a base-lined and prioritised security roadmap that lays out a clear path to improved security while minimising cost and disruption to the business. Recommendations are ranked according to their security effectiveness, initial cost, ongoing cost and cultural resistance, so as to enable the business to make informed decisions about future security spending',
                footerTitle: 'Security Posture Snapshot',
                type: 'feature',
                violator: true,
                side: 'left',
                showInFooter: true
            },
            {
                id: 'sar',
	            image: '/img/services/strategic/sar@2x.png',
	            icon: '/img/services/strategic/sar.png',
                eyebrow: 'Security',
                title: 'Architecture Review',
                paragraph: 'Expert advice and review of architectural designs to ensure appropriate security controls are implemented and your system is resilient to cyber attack.',
                footerTitle: 'Security Architecture and Review',
                type: 'row',
                violator: false,
                side: 'left',
                showInFooter: true
            },
	        {
		        id: 'grc',
		        image: '/img/services/strategic/team@2x.png',
		        icon: '/img/services/strategic/grc.png',
		        eyebrow: 'Governance,',
		        title: 'Risk and Compliance',
		        paragraph: 'TSS GRC Consulting experts deliver the independent expertise, experience and perspective to perform third party assessments of your current information security program and policies and assist executives and management in developing an overall program to manage the risks.<br /><br />Conducted by specialised cyber security experts with extensive experience working within small to large enterprises, and the local Australian Government, our GRC services offer a wide range of benefits that range from risk mitigation and business delivery optimisation to enhanced communication and elevated reputational advantage. So whether you require baseline assessment against ASD ISM, ISO 27001/2, SOC, PCI, COBIT or NIST, our GRC consultants can deliver the outcome you desire.',
		        footerTitle: 'Governance, Risk and Compliance',
		        type: 'row',
		        violator: false,
		        side: 'right',
		        showInFooter: true
	        },
            {
                id: 'itsaciso',
	            image: '/img/services/strategic/v_cisoitsa_v3@2x.png',
	            icon: '/img/services/strategic/vcisoitsa.png',
                eyebrow: 'Virtual',
                title: 'CISO/ITSA',
                paragraph: 'A service to provide you access to a pool of experienced information security professionals with experience in CISO, ITSA and/or strategic advisory roles. You can leverage this service for liaison with regulators, board advisory consulting and general cyber-security expertise.',
                footerTitle: 'Virtual CISO/ITSA',
                type: 'row',
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
                paragraph: 'Tabletop simulations provide a great vehicle for organisational awareness and training for inevitable security incidents. They allow a team to come together in a low-stress environment and assess their procedures and plans against Employee Behaviours, Infrastructure Resilience, Program Resources and External Threats. With the combined service of the TSS Incident Response Plans, your business can get up and running fast by leveraging our tailored cyber security playbooks.',
                footerTitle: 'Tabletop Attack Simulation',
                type: 'featurette',
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
                paragraph: 'Leverage the extensive experience of TSS incident response expertise, utilising the breadth and depth of real-world knowledge to create the necessary elements of an incident response plan or multiple table top designs for your business needs.',
                footerTitle: 'Incident Response Planning',
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
        showDescription: 'Our <b>Managed Security</b> and <b>Monitoring</b> division',
        description: "Our <b>Managed Security</b> and <b>Monitoring</b> division – A blend of machine automation and highly skilled analysts, focusing on keeping eyes on your organisation's key IT assets, 24 hours a day, 365 days a year.",
        quote: 'Our Managed Security Services uses our Cyber Orchestration Platform to blend machine automation and our highly skilled analysts to protect your organisation 24×7&nbsp;/&nbsp;365.',
        list: [
            {
                id: 'siemaas',
                image: '/img/services/tactical/saas_v2@2x.png',
	            icon: '/img/services/tactical/siemaas.png',
                eyebrow: 'SIEM',
                title: 'as a Service',
                paragraph: 'TSS operates a 24x7x365 Cyber Security Operations Centre rated to store and service Australian Government networks up to <b>PROTECTED</b> classification. Our SIEM monitoring and alerting service minimises business risk associated with the entire spectrum of cyber incidents; particularly targeted, persistent and sophisticated cyber intrusions.',
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
                paragraph: 'A cyclical process of identifying, classifying and scanning key assets. Generating monthly tailored reporting so clients can remediate or mitigate identified vulnerabilities.',
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
                eyebrow: 'End-Point',
                title: 'Detection and Response',
                paragraph: 'EDR is our service that addresses the need for continuous monitoring and response to advanced threats. The service is primarily focused on detecting and investigating suspicious activities (and traces of such), and other problems on hosts and endpoints.',
                footerTitle: 'End-Point Detection and Response',
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
                paragraph: 'Dark web sites are the meeting and market places for emerging cyber threats. Digital Risk Protection offers a rich sources of intelligence, often relevant to a broad spectrum of potential targets that aren’t accessible through conventional monitoring.',
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
        showDescription: 'Our <b>Red Teaming</b>, <b>Pentesting</b> and <b>Secure Code Review</b> division',
        description: "Our <b>Red Teaming</b>, <b>Pentesting</b> and <b>Secure Code Review</b> division – We emulate real world cyber adversaries, to both test your organisation's security controls, and provide pragmatic, business focused recommendations to prevent and resist future attacks.",
        quote: "Our Red Teaming is world class and emulates real-world adversaries, to both test your organisation's security controls and to prevent and resist future attacks.",
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
