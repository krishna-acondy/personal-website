import { Component, OnInit } from '@angular/core';
import { ITimelineItem } from '../shared/timeline/timeline.component';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss']
})
export class WebDevelopmentComponent implements OnInit {

  timelineItems: ITimelineItem[] = [
    {
      timePeriod: 'June 2017 - Present',
      title: 'Senior Software Developer / UX Designer',
      subtitle: `Philips Digital and Computational Pathology
      Belfast, Northern Ireland`,
      text: 'Leading a team building a suite of applications for <a href="http://www.pathxl.com/computational-pathology-tissuemark">computer-aided cancer diagnosis</a>. Designed and implemented a common UI component library, and an automated testing framework.'
    },
    {
      timePeriod: 'October 2014 - June 2017',
      title: 'Software Designer',
      subtitle: `Philips Connected Digital Propositions and Platforms
      Eindhoven, The Netherlands`,
      text: 'Worked on a <a href="https://www.philips.co.uk/healthcare/product/HCNOCTN482/ecarecoordinator-clinical-dashboard-for-ambulatory-health">cloud-based remote monitoring system for recovering patients</a>, an interface for programming luminous carpets and several internal tools.'
    },
    {
      timePeriod: 'Jan 2014 - Oct 2014',
      title: 'Master Thesis Intern',
      subtitle: `HintTech B.V.
      Delft, The Netherlands`,
      text: 'Implemented and evaluated an interface for temporally navigating and discovering news items from a database of billions of articles.'
    },
    {
      timePeriod: 'Jul 2013 - Sep 2013',
      title: 'Summer Intern',
      subtitle: `Philips Research
      Eindhoven, The Netherlands`,
      text: 'Prototyped a cyber-physical system for adjusting environmental parameters in the operating room.'
    },
    {
      timePeriod: 'Jun 2009 - May 2012',
      title: 'Systems Engineer, Systems Integration',
      subtitle: `Infosys Limited
      Mysore, India`,
      text: 'Worked on several web development projects in the banking and healthcare domains.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
