surveyApp.controller('surveyController', ['$scope', 'commonService', function ($scope, commonService) {

    $scope.selectedCat = commonService.selectedCategory;

    $scope.setActiveCat = function (cat) {
        $scope.selectedCat = cat;
        commonService.selectedCategory = cat;
    }

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
                    {'Customer Management': [{iconUrl: '', name: '', desc: '', cost: ''}]},
                    {'Productivity': [{iconUrl: '', name: '', desc: '', cost: ''}]},
                    {'Customer Support': [{iconUrl: '', name: '', desc: '', cost: ''}]}
                ]
            },
            {
                'Scale bundle': [
                    {
                        'Timesheet, Billing & Expanse Management': [{
                            iconUrl: '',
                            name: '',
                            desc: '',
                            cost: ''
                        }, {iconUrl: '', name: '', desc: '', cost: ''}]
                    },
                    {'Appointment Management': [{iconUrl: '', name: '', desc: '', cost: ''}]},
                    {'Accounting & Taxation': [{iconUrl: '', name: '', desc: '', cost: ''}]},
                    {'Shipping & Mailing': [{iconUrl: '', name: '', desc: '', cost: ''}]},
                    {'Customer Management': [{iconUrl: '', name: '', desc: '', cost: ''}]},
                    {'Productivity': [{iconUrl: '', name: '', desc: '', cost: ''}]},
                    {'Customer Support': [{iconUrl: '', name: '', desc: '', cost: ''}]},
                    {'Marketing': [{iconUrl: '', name: '', desc: '', cost: ''}]},
                    {'Workforce Management': [{iconUrl: '', name: '', desc: '', cost: ''}]}
                ]
            }],
        'medical': [{'Set Up Bundle 1': []}, {'Set Up Bundle 2': []}, {'Streamline bundle': []}, {'Scale bundle': []}],
        'insurance': [{'Set Up Bundle 1': []}, {'Set Up Bundle 2': []}, {'Streamline bundle': []}, {'Scale bundle': []}],
        'ecommerce': [{'Set Up Bundle 1': []}, {'Set Up Bundle 2': []}, {'Streamline bundle': []}, {'Scale bundle': []}]
    };

}]);