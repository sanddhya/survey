surveyApp.controller('surveyController', ['$scope', 'commonService', function ($scope, commonService) {

    $scope.selectedCat = commonService.selectedCategory;

    $scope.setActiveCat = function (cat) {
        $scope.selectedCat = cat;
        commonService.selectedCategory = cat;
    }

    $scope.selectedBundle = [];
    $scope.selectedApps = [];

    $scope.setBundle = function (bundle) {
        if ($scope.selectedBundle.indexOf(bundle) == -1) {
            $scope.selectedBundle.push(bundle);
            var apps = $scope.catVsbundles['legal'];
            for (var i = 0; i < apps.length; i++) {
                if (apps[i].hasOwnProperty(bundle)) {
                    for (var j = 0; j < apps[i][bundle].length; j++) {
                        for (var key in apps[i][bundle][j]) {
                            for (var k = 0; k < apps[i][bundle][j][key].length; k++) {
                                $scope.setApps(bundle + '-' + apps[i][bundle][j][key][k].name);
                            }
                        }
                    }
                    break;
                }
            }
        } else {
            var index = $scope.selectedBundle.indexOf(bundle);
            index != -1 ? $scope.selectedBundle.splice(index, 1) : '';
            var apps = $scope.catVsbundles['legal'];

            for (var i = 0; i < apps.length; i++) {
                if (apps[i].hasOwnProperty(bundle)) {
                    for (var j = 0; j < apps[i][bundle].length; j++) {
                        for (var key in apps[i][bundle][j]) {
                            for (var k = 0; k < apps[i][bundle][j][key].length; k++) {
                                $scope.setApps(bundle + '-' + apps[i][bundle][j][key][k].name);
                            }
                        }
                    }
                    break;
                }
            }
        }
    };


    $scope.setApps = function (app) {
        if ($scope.selectedApps.indexOf(app) == -1) {
            $scope.selectedApps.push(app);
        } else {
            var index = $scope.selectedApps.indexOf(app);
            index != -1 ? $scope.selectedApps.splice(index, 1) : '';
        }
    };

    $scope.catVsbundles = {
        'legal': [
            {
                'Set Up Bundle 1': [
                    {
                        'Timesheet, Billing & Expanse Management': [
                            {
                                'name': 'ClickTime',
                                'desc': 'Easy Online Timesheets',
                                'iconUrl': 'Clicktime.png',
                                'cost': '$10 per person/Month'
                            },
                            {
                                'name': 'Toggl',
                                'desc': 'Time Tracker & Employee Timesheet Software',
                                'iconUrl': 'toggl.png',
                                'cost': '$10 per person/Month'
                            }
                        ]
                    },
                    {
                        'Appointment Management': [
                            {
                                'name': 'Appointy',
                                'desc': 'Schedule Online, Increase Productivity, Retain Customers',
                                'iconUrl': 'appointy.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'https://appointy.com/'
                            }

                        ]
                    },
                    {
                        'Accounting & Taxation': [
                            {
                                'name': 'Quickbooks',
                                'desc': '#1 Cloud Accounting Software for Small Businesses',
                                'iconUrl': 'quickbooks.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'https://www.quickbooks.in/'
                            }
                        ]
                    },
                    {
                        'Shipping & Mailing': [
                            {
                                'name': 'Shipminder',
                                'desc': 'A calendar integration app that saves shipping costs',
                                'iconUrl': 'Shipminders logo.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'http://www.shipminders.com'
                            }
                        ]
                    }
                ]
            },
            {
                'Set Up Bundle 2': [
                    {
                        'Timesheet, Billing & Expanse Management': [
                            {
                                'name': 'Toggl',
                                'desc': 'Time Tracker & Employee Timesheet Software',
                                'iconUrl': 'toggl.png',
                                'cost': '$10 per person/Month'
                            }
                        ]
                    },
                    {
                        'Appointment Management': [{
                            'name': 'Appointy',
                            'desc': 'Schedule Online, Increase Productivity, Retain Customers',
                            'iconUrl': 'appointy.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': 'https://appointy.com/'
                        }]
                    },
                    {
                        'Shipping & Mailing': [{
                            'name': 'Raven Delivery',
                            'desc': 'Raven Delivery’ is an on-demand delivery platform integrated with UberRush/PostMates systems to our SMB clients.',
                            'iconUrl': 'Reven Delivery.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': 'http://www.ravendelivery.com'
                        }
                        ]
                    },
                ]
            },
            {
                'Streamline bundle': [
                    {
                        'Timesheet, Billing & Expanse Management': [{
                            'name': 'ClickTime',
                            'desc': 'Easy Online Timesheets',
                            'iconUrl': 'Clicktime.png',
                            'cost': '$10 per person/Month'
                        },
                            {
                                'name': 'Toggl',
                                'desc': 'Time Tracker & Employee Timesheet Software',
                                'iconUrl': 'toggl.png',
                                'cost': '$10 per person/Month'
                            }]
                    },
                    {
                        'Appointment Management': [{
                            'name': 'Appointy',
                            'desc': 'Schedule Online, Increase Productivity, Retain Customers',
                            'iconUrl': 'appointy.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': 'https://appointy.com/'
                        }]
                    },
                    {
                        'Accounting & Taxation': [{
                            'name': 'Quickbooks',
                            'desc': '#1 Cloud Accounting Software for Small Businesses',
                            'iconUrl': 'quickbooks.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': 'https://www.quickbooks.in/'
                        }
                        ]
                    },
                    {
                        'Shipping & Mailing': [{
                            'name': 'Shipminder',
                            'desc': 'A calendar integration app that saves shipping costs',
                            'iconUrl': 'Shipminders logo.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': 'http://www.shipminders.com'
                        }]
                    },
                    {
                        'Customer Management': [{
                            'name': 'Zoho',
                            'desc': "Run your entire business with Zoho's suite of online productivity tools and SaaS applications.",
                            'iconUrl': 'zoho-download.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': ''
                        }]
                    },
                    {
                        'Productivity': [{
                            'name': 'Slack',
                            'desc': "Fewer meetings, less internal email, all your tools integrated. That's Slack.",
                            'iconUrl': 'Slack-iOS-icon.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': ''
                        }]
                    },
                    {
                        'Customer Support': [{
                            'name': 'Freshdesk',
                            'desc': 'Deliver support in a better way with Zoho Desk',
                            'iconUrl': 'freshdesk logo.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': ''
                        }]
                    }]
            },
            {
                'Scale bundle': [
                    {
                        'Timesheet, Billing & Expanse Management': [{
                            'name': 'ClickTime',
                            'desc': 'Easy Online Timesheets',
                            'iconUrl': 'Clicktime.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': 'https://www.clicktime.com/'
                        },
                            {
                                'name': 'Toggl',
                                'desc': 'Time Tracker & Employee Timesheet Software',
                                'iconUrl': 'toggl.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'https://toggl.com/'
                            }]
                    },
                    {
                        'Appointment Management': [{
                            'name': 'Appointy',
                            'desc': 'Schedule Online, Increase Productivity, Retain Customers',
                            'iconUrl': 'appointy.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': 'https://appointy.com/'
                        }]
                    },
                    {
                        'Accounting & Taxation': [{
                            'name': 'Quickbooks',
                            'desc': '#1 Cloud Accounting Software for Small Businesses',
                            'iconUrl': 'quickbooks.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': 'https://www.quickbooks.in/'
                        }]
                    },
                    {
                        'Shipping & Mailing': [{
                            'name': 'Shipminder',
                            'desc': 'A calendar integration app that saves shipping costs',
                            'iconUrl': 'Shipminders logo.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': 'http://www.shipminders.com'
                        }]
                    },
                    {
                        'Customer Management': [{
                            'name': 'Zoho',
                            'desc': "Run your entire business with Zoho's suite of online productivity tools and SaaS applications.",
                            'iconUrl': 'zoho-download.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': ''
                        }]
                    },
                    {
                        'Productivity': [{
                            'name': 'Slack',
                            'desc': "Fewer meetings, less internal email, all your tools integrated. That's Slack.",
                            'iconUrl': 'Slack-iOS-icon.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': ''
                        }]
                    },
                    {
                        'Customer Support': [{
                            'name': 'Freshdesk',
                            'desc': 'Deliver support in a better way with Zoho Desk',
                            'iconUrl': 'freshdesk logo.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': ''
                        }]
                    },
                    {
                        'Marketing': [{
                            'name': 'Adoo App',
                            'desc': 'Smart Contacts and New Customer Acquisition App for SMBs',
                            'iconUrl': '1_Adoo.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': 'http://www.adooapp.com'
                        }]
                    },
                    {
                        'Workforce Management': [{
                            'name': 'Workday',
                            'desc': 'Workday offers a highly effective ERP alternative for HR and financial management to businesses.',
                            'iconUrl': 'Workday_Logo.png',
                            'cost': '$10 per person/Month',
                            'hyperLink': ''
                        }]
                    }
                ]
            }
        ]
        /*
                'medical':
                    [{'Set Up Bundle 1': []}, {'Set Up Bundle 2': []}, {'Streamline bundle': []}, {'Scale bundle': []}],
                'insurance':
                    [{'Set Up Bundle 1': []}, {'Set Up Bundle 2': []}, {'Streamline bundle': []}, {'Scale bundle': []}],
                'ecommerce':
                    [{'Set Up Bundle 1': []}, {'Set Up Bundle 2': []}, {'Streamline bundle': []}, {'Scale bundle': []}]*/
    };
}]);