import { Component } from '@angular/core';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss']
})
export class WebDevelopmentComponent {

  timelineItems = [
    {
      id: 0,
      icon: 'assets/images/programming.svg',
      date: 'Jun 2017 - Nov 2019',
      title: 'Senior Software Developer / UX Designer',
      content: `<strong>Philips Digital and Computational Pathology</strong>\nBelfast, Northern Ireland\nLed a team building a suite of applications for <a href="http://www.pathxl.com/computational-pathology-tissuemark">computer-aided cancer diagnosis</a>.\nDesigned and implemented a common UI component library, and an automated testing framework.`
    },
    {
      id: 1,
      icon: 'assets/images/graphic-design.svg',
      date: 'Oct 2014 - Jun 2017',
      title: 'Software Designer',
      content: `<strong>Philips Connected Digital Propositions and Platforms</strong>\nEindhoven, The Netherlands\nWorked on a <a href="https://www.philips.co.uk/healthcare/product/HCNOCTN482/ecarecoordinator-clinical-dashboard-for-ambulatory-health">cloud-based remote monitoring system for recovering patients</a>, an interface for programming <a href="https://www.lighting.philips.co.uk/systems/lighting-systems/luminous-flooring">luminous carpets</a>, and several internal tools.`
    },
    {
      id: 2,
      icon: 'assets/images/internship.svg',
      date: 'Jan 2014 - Oct 2014',
      title: 'Master Thesis Intern',
      content: `<strong>HintTech B.V.</strong>\nDelft, The Netherlands\nImplemented and evaluated an interface for temporally navigating and discovering news items from a database of billions of articles.`
    },
    {
      id: 3,
      icon: 'assets/images/internship.svg',
      date: 'Jul 2013 - Sep 2013',
      title: 'Summer Intern',
      content: `Philips Research\nEindhoven, The Netherlands\nPrototyped a cyber-physical system for adjusting environmental parameters in the operating room.`
    },
    {
      id: 4,
      icon: 'assets/images/programming.svg',
      date: 'Jun 2009 - May 2012',
      title: 'Systems Engineer, Systems Integration',
      content: `Infosys Limited\nMysore, India\nWorked on several web development projects in the banking and healthcare domains.`
    }
  ];
}
