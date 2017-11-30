surveyApp.controller('surveyController', ['$scope', 'commonService', function ($scope, commonService) {

    $scope.selectedCat = commonService.selectedCategory;
    $scope.selectedBundle = [];
    $scope.selectedApps = [];

    $scope.setActiveCat = function (cat) {
        $scope.selectedCat = cat || $scope.selectedCat;
        $scope.selectedBundle = [];
        $scope.selectedApps = [];
        commonService.selectedCategory = cat;
    };

    $scope.setBundle = function (bundle) {
        if ($scope.selectedBundle.indexOf(bundle) == -1) {
            $scope.selectedBundle.push(bundle);
            var apps = $scope.catVsbundles[$scope.selectedCat];
            for (var i = 0; i < apps.length; i++) {
                if (apps[i].hasOwnProperty(bundle)) {
                    for (var j = 0; j < apps[i][bundle].length; j++) {
                        for (var key in apps[i][bundle][j]) {
                            for (var k = 0; k < apps[i][bundle][j][key].length; k++) {
                                $scope.setApps(bundle + '-' + apps[i][bundle][j][key][k].name, true);
                            }
                        }
                    }
                    break;
                }
            }
        } else {
            var index = $scope.selectedBundle.indexOf(bundle);
            index != -1 ? $scope.selectedBundle.splice(index, 1) : '';
            var apps = $scope.catVsbundles[$scope.selectedCat];

            for (var i = 0; i < apps.length; i++) {
                if (apps[i].hasOwnProperty(bundle)) {
                    for (var j = 0; j < apps[i][bundle].length; j++) {
                        for (var key in apps[i][bundle][j]) {
                            for (var k = 0; k < apps[i][bundle][j][key].length; k++) {
                                $scope.setApps(bundle + '-' + apps[i][bundle][j][key][k].name, false);
                            }
                        }
                    }
                    break;
                }
            }
        }
    };


    $scope.setApps = function (app, flag) {
        if ($scope.selectedApps.indexOf(app) == -1 && flag) {
            $scope.selectedApps.push(app);
        } else {
            if (!flag) {
                var index = $scope.selectedApps.indexOf(app);
                index != -1 ? $scope.selectedApps.splice(index, 1) : '';
            }
        }
    };


    $scope.mapping = {
        'legal': 'Legal Services',
        'medical': 'Medical Professionals',
        'insurance': 'Insurance',
        'ecommerce': 'Small/E-commerce Retailers'
    };

    $scope.catVsbundles = {
        'legal': [
            {
                'Set Up': [
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
                            },
                            {
                                'name': 'Bigtime',
                                'desc': '#1 Time & Billing App',
                                'iconUrl': 'Bigtime.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'https://www.bigtime.net/'
                            },
                            {
                                'name': 'Expensify',
                                'desc': 'Expense reports that don’t Suck !',
                                'iconUrl': 'expensify.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'https://www.expensify.com/'
                            },
                            {
                                'name': 'Concur',
                                'desc': 'Business & Travel Expense Management',
                                'iconUrl': 'concur.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'https://www.concursolutions.com/'
                            },
                            {
                                'name': 'Certify',
                                'desc': 'Travel & Expense Management Software',
                                'iconUrl': 'certify.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'https://www.certify.com/'
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
                            },
                            {
                                'name': 'Simplybook.me',
                                'desc': 'Online booking system for websites, facebook and calendar scheduling app',
                                'iconUrl': 'Simplybookme.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'https://simplybook.me/'
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
                            },
                            {
                                'name': 'Freshbooks',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'freshbooks.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
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
                            },
                            {
                                'name': 'Raven Delivery',
                                'desc': 'Raven Delivery’ is an on-demand delivery platform integrated with UberRush/PostMates systems to our SMB clients.',
                                'iconUrl': 'Reven Delivery.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'http://www.ravendelivery.com'
                            }
                        ]
                    }
                ]
            },
            {
                'Streamline': [
                    {
                        'Customer Management': [
                            {
                                'name': 'Zoho',
                                'desc': "Run your entire business with Zoho's suite of online productivity tools and SaaS applications.",
                                'iconUrl': 'zoho-download.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'Insightly',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'insightly.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }
                        ]
                    },
                    {
                        'Productivity': [
                            {
                                'name': 'Slack',
                                'desc': "Fewer meetings, less internal email, all your tools integrated. That's Slack.",
                                'iconUrl': 'Slack-iOS-icon.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'O365',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'office365.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }

                        ]
                    },
                    {
                        'Customer Support': [
                            {
                                'name': 'Freshdesk',
                                'desc': 'Deliver support in a better way with Zoho Desk',
                                'iconUrl': 'freshdesk logo.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'Zendesk',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'zendesk.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }
                        ]
                    },
                ]
            },
            {
                'Scale': [
                    {
                        'Marketing': [
                            {
                                'name': 'Adoo App',
                                'desc': 'Smart Contacts and New Customer Acquisition App for SMBs',
                                'iconUrl': '1_Adoo.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'http://www.adooapp.com'
                            },
                            {
                                'name': 'Repumanage',
                                'desc': 'Online reputation management solution',
                                'iconUrl': '4_Repumanage.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'http://www.onlinerepumanage.com'
                            },
                            {
                                'name': 'AudienceKart',
                                'desc': 'Smart Audience connects SMBs such as small retail business owner, online retai....',
                                'iconUrl': '2_Audicart.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'http://www.audiencekart.com'
                            }
                        ]
                    },
                    {
                        'Workforce Management': [
                            {
                                'name': 'Workday',
                                'desc': 'Workday offers a highly effective ERP alternative for HR and financial management to businesses.',
                                'iconUrl': 'Workday_Logo.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'SABA',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'saba.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }
                        ]
                    }
                ]
            }
        ],
        'ecommerce': [
            {
                'Set Up': [
                    {
                        'Customer Acquisition': [
                            {
                                'name': 'Adoo App',
                                'desc': 'Smart Contacts and New Customer Acquisition App for SMBs',
                                'iconUrl': '1_Adoo.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'http://www.adooapp.com'
                            },
                            {
                                'name': 'AudienceKart',
                                'desc': 'Smart Audience connects SMBs such as small retail business owner, online retai....',
                                'iconUrl': '2_Audicart.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'http://www.audiencekart.com '
                            }
                        ]
                    },
                    {
                        'Inventory Management': [
                            {
                                'name': 'Shopventory',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'shopventory.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'Celect',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'celect.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }

                        ]
                    },
                    {
                        'Customer Management': [
                            {
                                'name': 'ShipticketDesk',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '9ship.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'SelfserveBot',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'Repumanage',
                                'desc': 'Online reputation management solution',
                                'iconUrl': '4_Repumanage.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'http://www.onlinerepumanage.com'
                            }
                        ]
                    },
                    {
                        'Shipping and Mailing': [
                            {
                                'name': 'Shipminder',
                                'desc': 'A calendar integration app that saves shipping costs',
                                'iconUrl': 'Shipminders logo.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'http://www.shipminders.com'
                            },
                            {
                                'name': 'SearchnShip',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '6_Search n ship.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'TrackO',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'Shipping Companion',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '6_Search_ship.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'Raven Delivery',
                                'desc': 'Raven Delivery’ is an on-demand delivery platform integrated with UberRush/PostMates systems to our SMB clients.',
                                'iconUrl': 'Reven Delivery.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'http://www.ravendelivery.com'
                            }
                        ]
                    }
                ]
            },
            {
                'Streamline': [
                    {
                        'Multiple channel sales management': [
                            {
                                'name': 'SyncNShip',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '10_sync.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'Seller Plus',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }
                        ]
                    },
                    {
                        'Workforce Productivity': [
                            {
                                'name': 'O365',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'office365.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'Slack',
                                'desc': "Fewer meetings, less internal email, all your tools integrated. That's Slack.",
                                'iconUrl': 'Slack-iOS-icon.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'Gsuite',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'gSuite.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
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
                            },
                            {
                                'name': 'Freshbooks',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'freshbooks.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }
                        ]
                    },
                ]
            },
            {
                'Scale': [
                    {
                        'Point of Sale': [
                            {
                                'name': 'Square for Retail/ POS',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'Scandit Barcode scanner',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'scandit.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }
                        ]
                    },
                    {
                        'Insurance': [
                            {
                                'name': 'ParcInsurance',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }
                        ]
                    },
                    {
                        'Returns Management': [
                            {
                                'name': 'Newgistics',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'newgistics.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }
                        ]
                    }
                ]
            }
        ],
        'insurance': [
            {
                'Set Up': [
                    {
                        'Customer Acquisition': [
                            {
                                'name': 'Adoo App',
                                'desc': 'Smart Contacts and New Customer Acquisition App for SMBs',
                                'iconUrl': '1_Adoo.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'http://www.adooapp.com'
                            }
                        ]
                    },
                    {
                        'Customer Management': [
                            {
                                'name': 'ShipticketDesk',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '9ship.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'SelfserveBot',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '7selfserveboat.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'Repumanage',
                                'desc': 'Online reputation management solution',
                                'iconUrl': '4_Repumanage.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'http://www.onlinerepumanage.com'
                            }
                        ]
                    },
                    {
                        'Shipping and Mailing': [
                            {
                                'name': 'Shipminder',
                                'desc': 'A calendar integration app that saves shipping costs',
                                'iconUrl': 'Shipminders logo.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': 'http://www.shipminders.com'
                            },
                            {
                                'name': 'SearchnShip',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '6_Search n ship.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'TrackO',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }
                        ]
                    },
                    {
                        'Document Management': [
                            {
                                'name': 'Box',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'Dropbox',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }
                        ]
                    }
                ]
            },
            {
                'Streamline': [
                    {
                        'Workforce Productivity': [
                            {
                                'name': 'O365',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'office365.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'Slack',
                                'desc': "Fewer meetings, less internal email, all your tools integrated. That's Slack.",
                                'iconUrl': 'Slack-iOS-icon.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'Gsuite',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'gSuite.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
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
                            },
                            {
                                'name': 'Freshbooks',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'freshbooks.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }
                        ]
                    },
                    {
                        'Business Intelligence and Analytics': [
                            {
                                'name': 'Zoho Reports',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'zohoReport.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            },
                            {
                                'name': 'Microsoft PowerBI',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': 'powerBI.png',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }
                        ]
                    }
                ]
            },
            {
                'Scale': [
                    {
                        'Claims Management': [
                            {
                                'name': 'Sapiens IDIT Claims',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }
                        ]
                    },
                    {
                        'Insurance Self Service': [
                            {
                                'name': 'Genie.ai',
                                'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                'iconUrl': '',
                                'cost': '$10 per person/Month',
                                'hyperLink': ''
                            }
                        ]
                    }
                ]
            }
        ],
        'medical':
            [
                {
                    'Set up': [
                        {
                            'Appointment Management': [
                                {
                                    'name': 'Simplybook.me',
                                    'desc': 'Online booking system for websites, facebook and calendar scheduling app',
                                    'iconUrl': 'Simplybookme.png',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': 'https://simplybook.me/'
                                },
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
                            'Patient Diagnosis': [
                                {
                                    'name': 'Luminate Health',
                                    'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                    'iconUrl': '',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
                                }
                            ]
                        },
                        {
                            'Document Management': [
                                {
                                    'name': 'Box',
                                    'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                    'iconUrl': '',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
                                },
                                {
                                    'name': 'Dropbox',
                                    'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                    'iconUrl': '',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
                                }
                            ]
                        },
                        {
                            'Shipping and Mailing': [
                                {
                                    'name': 'Shipminder',
                                    'desc': 'A calendar integration app that saves shipping costs',
                                    'iconUrl': 'Shipminders logo.png',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': 'http://www.shipminders.com'
                                },
                                {
                                    'name': 'SearchnShip',
                                    'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                    'iconUrl': '6_Search n ship.png',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
                                },
                                {
                                    'name': 'TrackO',
                                    'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                    'iconUrl': '',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
                                },
                                {
                                    'name': 'Shipping Companion',
                                    'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                    'iconUrl': '6_Search_ship.png',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
                                },
                                {
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
                    'Streamline': [
                        {
                            'Electronic Health Records': [
                                {
                                    'name': 'HealthFusion MediTouch',
                                    'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                    'iconUrl': '',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
                                },
                                {
                                    'name': 'Praxis EMR',
                                    'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                    'iconUrl': '',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
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
                                },
                                {
                                    'name': 'Freshbooks',
                                    'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                    'iconUrl': 'freshbooks.png',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
                                }
                            ]
                        },
                        {
                            'Productivity': [
                                {
                                    'name': 'O365',
                                    'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                    'iconUrl': 'office365.png',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
                                },
                                {
                                    'name': 'Slack',
                                    'desc': "Fewer meetings, less internal email, all your tools integrated. That's Slack.",
                                    'iconUrl': 'Slack-iOS-icon.png',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
                                },
                                {
                                    'name': 'Gsuit',
                                    'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                    'iconUrl': 'gSuite.png',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
                                }
                            ]
                        }]
                },
                {

                    'Scale': [
                        {
                            'Productivity': [
                                {
                                    'name': 'Radekal',
                                    'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                    'iconUrl': '',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
                                },
                                {
                                    'name': 'Atmolytics',
                                    'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                    'iconUrl': '',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
                                }
                            ]
                        },
                        {
                            'Billing & Collection': [
                                {
                                    'name': 'CollaborateMD',
                                    'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                    'iconUrl': '',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
                                }
                            ]
                        },
                        {
                            'Information Management': [
                                {
                                    'name': 'Epocrates',
                                    'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                                    'iconUrl': '',
                                    'cost': '$10 per person/Month',
                                    'hyperLink': ''
                                }
                            ]
                        }
                    ]
                }
            ]

    };
}]);