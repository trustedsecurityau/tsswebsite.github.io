<template>
    <div class="cves">
        <header-view theme="dark"/><Hero
            :gp="true"
            no-fixed-height
            remove-padding
            theme="dark">
            <h1/>
        </Hero>

        <section id="cves">
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="cell small-12">
                        <h1>CVEs</h1>
                    </div>
                    <div class="cell small-12 medium-auto">
                        <table>
                            <tr>
                                <th>CVE #</th>
                                <th>Vulnerability</th>
                                <th>Product</th>
                                <th>Discoverer</th>
                                <th>Date</th>
                            </tr>
                            <tr>
                                <td>CVE-2018-11077</td>
                                <td>Dell EMC Avamar and IDPA are affected by an OS command injection vulnerability that may potentially be exploited by an attacker to compromise the affected systems.</td>
                                <td>Dell EMC Avamar</td>
                                <td>TSS Security Testing Team</td>
                                <td>November 2018</td>
                            </tr>
                            <tr>
                                <td>CVE-2018-11076</td>
                                <td>Dell EMC Avamar Server versions 7.2.0, 7.2.1, 7.3.0, 7.3.1, 7.4.0 and 7.4.1 and Dell EMC Integrated Data Protection  Appliance (IDPA) 2.0 are affected by an information exposure vulnerability. Avamar Java management console’s SSL/TLS private key may be leaked in the Avamar Java management client package. The private key could potentially be used by an unauthenticated attacker on the same data-link layer to initiate a MITM attack on management console users.</td>
                                <td>Dell EMC Avamar</td>
                                <td>TSS Security Testing Team</td>
                                <td>November 2018</td>
                            </tr>
                            <tr>
                                <td>CVE-2018-11067</td>
                                <td>Dell EMC Avamar Client Manager in Dell EMC Avamar Server versions 7.2.0, 7.2.1, 7.3.0, 7.3.1, 7.4.0, 7.4.1, 7.5.0, 7.5.1, 18.1 and Dell EMC Integrated Data Protection Appliance (IDPA) versions 2.0, 2.1 and 2.2 contain an open  redirection vulnerability. A remote unauthenticated attacker could potentially exploit this vulnerability to redirect  application users to arbitrary web URLs by tricking the victim users to click on maliciously crafted links. The vulnerability could be used to conduct phishing attacks that cause users to unknowingly visit malicious sites.</td>
                                <td>Dell EMC Avamar</td>
                                <td>Jarrod Farncomb</td>
                                <td>November 2018</td>
                            </tr>
                            <tr>
                                <td>CVE-2018-11066</td>
                                <td>Dell EMC Avamar Client Manager in Dell EMC Avamar Server versions 7.2.0, 7.2.1, 7.3.0, 7.3.1, 7.4.0, 7.4.1, 7.5.0,  7.5.1, 18.1 and Dell EMC Integrated Data Protection Appliance (IDPA) versions 2.0, 2.1 and 2.2 contain a Remote Code Execution vulnerability. A remote unauthenticated attacker could potentially exploit this vulnerability to execute arbitrary commands on the server.</td>
                                <td>Dell EMC Avamar</td>
                                <td>Jarrod Farncomb</td>
                                <td>November 2018</td>
                            </tr>
                            <tr>
                                <td>CVE-2018-15526</td>
                                <td>Structured Exception Handler (SEH) overwrite stack-based buffer overflow via a crafted HTTP request</td>
                                <td>Genesys Customer Interaction Center</td>
                                <td>Jeremy Goldstein</td>
                                <td>September 2018</td>
                            </tr>
                            <tr>
                                <td>CVE-2018-15525</td>
                                <td>Registered SIP users can download any user's SIP configuration file from the provisioning server, which could allow an attacker to impersonate other users</td>
                                <td>Genesys Customer Interaction Center</td>
                                <td>TSS Security Testing Team</td>
                                <td>September 2018</td>
                            </tr>
                            <tr>
                                <td>CVE-2018-15527</td>
                                <td>Stored Cross-Site Scripting (XSS) vulnerability in TFTP server</td>
                                <td>Genesys Customer Interaction Center</td>
                                <td>TSS Security Testing Team</td>
                                <td>September 2018</td>
                            </tr>
                            <tr>
                                <td>CVE-2018-14776</td>
                                <td>Click Studios Passwordstate before 8.3 Build 8397 allows XSS by authenticated users via an uploaded HTML document.</td>
                                <td>Clickstudios Passwordstate</td>
                                <td>Jarrod Farncomb</td>
                                <td>August 2018</td>
                            </tr>
                            <tr>
                                <td>CVE-2017-1000457</td>
                                <td>Cross-site scripting (XSS) vulnerability in Help.aspx in mojoPortal version 2.5.0.0 allows remote attackers to inject arbitrary web script or HTML via the helpkey parameter. Exploitation requires authenticated reflected cross-site scripting for user accounts assigned either the "Administrators" or "Content Administrators" role.</td>
                                <td>MojoPortal</td>
                                <td>Jarrod Farncomb</td>
                                <td>February 2018</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <footer-view/>
    </div>
</template>

<script>
import HeaderView from '@/components/partials/HeaderView'
import FooterView from '@/components/partials/FooterView'
import HelloWorld from '@/components/HelloWorld.vue'
import Hero from '@/components/modules/Hero'
import PanelGroup from '@/components/modules/custom/PanelGroup'
import Panel from '@/components/modules/custom/Panel'
import SectionModule from '@/components/modules/Section'
import CareersRouter from '@/components/modules/routers/Careers'
import AboutRouter from '@/components/modules/routers/About'

export default {
    components: {
        HeaderView,
        FooterView,
        HelloWorld,
        Hero,
        PanelGroup,
        Panel,
        SectionModule,
        CareersRouter,
        AboutRouter
    },
    mounted: function () {

    }
}

</script>

<style lang="scss" scoped>
    @import '../../assets/scss/settings';

    section#cves {
        table {
            border-spacing: 0px;
        }
        th {
            color: #30c699;
            text-align: left;
        }
        td, th {
            padding: 5px;
        }
        tr:nth-child(even) {
            background-color: #f5f5f5;
        }

        background-color: $white;
        padding: 80px 0;
        position: relative;
        z-index: 0;

        ul {
            margin-top: -10px;

            li {
                margin-left: 10px;
                padding-left: 10px;
            }
        }

        h1, h2, h3, h4, h5, .cell {
            // position: relative;
            // z-index: 4;
        }

        h3 {
            color: $primary-color;
        }

        h1 {
            margin-bottom: 50px;
        }

        .icon {
            color: $header-color;
            font-size: 26px;
        }

        b {
            color: $header-color;
            display: block;
        }

        p a {
            font-weight: 500;
        }

        a.key {
            display: block;
            font-size: 14px;
            color: $body-color;
            opacity: 0.5;
            margin-top: 8px;

            &:hover {
                color: $primary-color;
            }
        }

    }
</style>
