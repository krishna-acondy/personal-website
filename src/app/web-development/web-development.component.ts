import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss']
})
export class WebDevelopmentComponent {
  isDarkMode$: Observable<boolean>;
  constructor(themeService: ThemeService) {
    this.isDarkMode$ = themeService.darkMode;
  }

  timelineItems = [
    {
      id: 0,
      icon: 'assets/images/programming.svg',
      date: 'Jun 2017 - Nov 2019',
      title: 'Senior Software Developer / UI Designer',
      content: `<strong>Philips Digital and Computational Pathology\n<p class='place'>Belfast, Northern Ireland</p></strong>\nLed a team building a suite of applications for <a href="http://www.pathxl.com/computational-pathology-tissuemark">computer-aided cancer diagnosis</a>.\nDesigned and implemented a common UI component library, and an automated testing framework.`
    },
    {
      id: 1,
      icon: 'assets/images/graphic-design.svg',
      date: 'Oct 2014 - Jun 2017',
      title: 'Software Designer',
      content: `<strong>Philips Connected Digital Propositions and Platforms\n<p class='place'>Eindhoven, The Netherlands</p></strong>\nWorked on a <a href="https://www.philips.co.uk/healthcare/product/HCNOCTN482/ecarecoordinator-clinical-dashboard-for-ambulatory-health">cloud-based remote monitoring system for recovering patients</a>, an interface for programming <a href="https://www.lighting.philips.co.uk/systems/lighting-systems/luminous-flooring">luminous carpets</a>, and several internal tools.`
    },
    {
      id: 2,
      icon: 'assets/images/internship.svg',
      date: 'Jan 2014 - Oct 2014',
      title: 'Master Thesis Intern',
      content: `<strong>HintTech B.V.\n<p class='place'>Delft, The Netherlands</p></strong>\nImplemented and evaluated an interface for temporally navigating and discovering news items from a database of billions of articles.`
    },
    {
      id: 3,
      icon: 'assets/images/internship.svg',
      date: 'Jul 2013 - Sep 2013',
      title: 'Summer Intern',
      content: `<strong>Philips Research\n<p class='place'>Eindhoven, The Netherlands</p></strong>\nPrototyped a cyber-physical system for adjusting environmental parameters in the operating room.`
    },
    {
      id: 4,
      icon: 'assets/images/programming.svg',
      date: 'Jun 2009 - May 2012',
      title: 'Systems Engineer, Systems Integration',
      content: `<strong>Infosys Limited\n<p class='place'>Mysore, India</p></strong>\nWorked on several web development projects in the banking and healthcare domains.`
    }
  ];
}
