Feature: Data Table Functionality

  Background:
    Given Navigate to basqar
    When  Enter username and password and click Login button
    Then User should login successfully

  Scenario: Create a country
    And Click on the element in the left class
      | setupOne   |
      | parameters |
      | countries  |

    And Click on the element in the content class
      | addButton |

    When User sends the keys in the dialog content class
      | nameInput | KafDagiUlkesi345 |
      | codeInput | 12345           |

    And Click on the element in the content class
      | saveButton |

    Then Success message should be displayed

  Scenario: Create a Nationality
    And Click on the element in the left class
      | setupOne    |
      | parameters  |
      | nationality |

    And Click on the element in the content class
      | addButton |

    When User sends the keys in the dialog content class
      | nameInput | KafDagiMilleti345 |

    And Click on the element in the content class
      | saveButton |

    Then Success message should be displayed

  Scenario: Create a Fee
    And Click on the element in the left class
      | setupOne   |
      | parameters |
      | fees       |

    And Click on the element in the content class
      | addButton |

    When User sends the keys in the dialog content class
      | nameInput       | Lesson345 |
      | codeInput       | 15237    |
      | integrationCode | 34537    |
      | priority        | 1236 |

    And Click on the element in the content class
      | saveButton |

    Then Success message should be displayed

#  Scenario: Create an Entrance Exam

#  BU SENARYO _09_ENTRANCE EXAM OLARAK DEGISTIRILDI...

#    And Click on the element in the left class
#      | etranceExams      |
#      | setupEntranceExam |
#      | etranceExams2     |
#
#    And Click on the element in the content class
#      | addButton |
#
#    When User sends the keys in the dialog content class
#      | nameInput | ICT 3|
#
#    And Click on the element in the form class
#      | academicPeriod |
#      | options        |
#      | GradeLevel     |
#      | options        |
#      | documentType   |
#      | options        |
#      | formAddButton  |
#
#    And Click on the element in the content class
#      | saveButton |
#
#    Then Success message should be displayed
#
#    Given Navigate to back page
#
#    Then User delete the "ICT"
#
#    Then Success message should be displayed
#
