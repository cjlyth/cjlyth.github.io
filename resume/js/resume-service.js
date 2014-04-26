'use strict';
/* Static Resume Service  */
angular.module('resumeApp.services')
.value('resume', {
  experience: [{
    company: 'Booz Allen Hamilton',
    dates: '2003-Present',
    projects: [{
      title: 'Digital Information Gathering System (DIGS)',
      dates: 'August 2011 - January 2012',
      roles: ['System Architect', 'Technical Lead'],
      description: [
        'Designed a swing GUI based on the NetBeans platform to visualize and manipulate graph structures',
        'Integrated Gephi, yFiles, and Booz Allen proprietary code to create a robust information discovery platform',
        'Created API’s and SPI’s for junior team members to use, and mentored as necessary to ensure success'
      ]
    }, {
      title: 'Internet Search Execution Environment (iSEE)',
      dates: 'July 2010 - July 2011',
      roles: ['Solution Architect', 'Technical Lead'],
      description: [
        'Designed an enterprise level system that simulated the infrastructure of the internet for use in training environments',
        'Quickly responded to rapidly evolving client requirements, provide a high level of service and satisfaction to our client',
        'Integrated multiple enterprise open source applications (Heritrix, Wayback, Nutch) to suit the needs of the project',
        'Designed and developed API hooks in open source applications to collect metrics relevant to the client’s needs',
        'Integrated software from a subcontractor into the environment to allow for the collection of more metric data',
        'Designed and developed an interface for instructors to monitor and manipulate a student’s activity in the environment',
        'Collected hundreds of gigabytes of web pages to be searched and rendered in the environment while offline, making rendering nearly identical to the original online representation',
        'Presented multiple very successful demos to very senior members of the intelligence community',
        'Generated a high level of excitement in the instructor community for the use of this tool'
      ]
    }]
  }, {
    company: 'US ARMY',
    dates: '1997-2004'
  }]
});
// http://www.gravatar.com/avatar/d9d32ad9ba18621a60a12019c904461f.png

