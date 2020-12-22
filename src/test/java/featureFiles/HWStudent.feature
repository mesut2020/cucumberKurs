Feature: HW: Student functionality

  Background:
    Given Navigate to basqar
    When  Enter username and password and click Login button
    Then User should login successfully

  @RegressionTest
  Scenario Outline: User add and delete a student

    When Click on the element in the left class
      | studentParent |
      | studentsChild |

    And Click on the element in the content class
      | addButton |

    And User sends the keys in the form content class
      | firstName | <firstname> |
      | lastName  | <lastname>  |
#      | birthDate | <birthdate> |
      | studentID | <studentid> |


    And Click on the element in the form class
      | gender                   |
      | <genderOption>           |
      | gradeLevel               |
      | <gradeLevelOption>       |
      | schoolDepartment         |
      | <schoolDepartmentOption> |
      | section                  |
      | <sectionOption>          |

    And User sends the keys in the form content class
      | mobilePhone | <mobilephone> |
      | email       | <email>       |

    And Click on the element in the form class
      | citizinship           |
      | <citizinshipOption>   |
      | nationality           |
      | <nationalityOption>   |
      | studentDocumentType   |
      | <studentDocumentType> |


    And User sends the keys in the form content class
      | previousSchool        | <previousSchool>        |
      | studentDocumentNumber | <studentDocumentNumber> |

    And Click on the element in the form class
      | representatives |

    And Click on the element in the content class
      | addButton |

    And Click on the element in the form class
      | representative          |
      | <representativeOptions> |
      | country                 |
      | <countryOptions>        |
      | city                    |
      | <cityOptions>           |

    And User sends the keys in the form content class
      | firstNameRep   | <representativeFirstName>   |
      | lastNameRep    | <representativeLastName>    |
      | mobilePhoneRep | <representativeMobilePhone> |

    And Click on the element in the form class
      | representativeAddButton |
      | formSaveButton          |

    Then Success message should be displayed

    Given Navigate to back page

    When User delete the student"<firstname>"

    Then Success message should be displayed


    Examples:
      | firstname | lastname | birthdate  | studentid | mobilephone | email            | previousSchool      | representativeFirstName | representativeLastName | representativeMobilePhone | genderOption | gradeLevelOption | schoolDepartmentOption | sectionOption | citizinshipOption | nationalityOption | representativeOptions | countryOptions | cityOptions | studentDocumentType |studentDocumentNumber|
      | Erol      | Tas      | 08/08/2006 | 20202006  | 1234567898  | abcd@yahoo.com   | Selcuklu Orta Okulu | Ahmet                   | Baba                   | 1234567899                | option1      | option4          | option2                | option2       | option1           | option2           | option1               | option4        | option2     | option2             | 12345               |
      | Jale      | Polat    | 08/08/2008 | 20202008  | 1234567899  | efgh@hotmail.com | Karatay Orta Okulu  | Ayse                    | Ana                    | 1122334455                | option2      | option2          | option1                | option1       | option2           | option4           | option2               | option1        | option2     | option3             | 67890               |

