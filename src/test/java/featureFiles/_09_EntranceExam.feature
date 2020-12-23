Feature: Entrance Exam functionality

  Background:
    Given Navigate to basqar
    When  Enter username and password and click Login button
    Then User should login successfully


  Scenario: Create an entrance exam
    And Click on the element in the left class
      | entranceExamsParent |
      | setupEntranceExam   |
      | entranceExamsChild  |

    And Click on the element in the content class
      | addButton |

    When User sends the keys in the form content class
      | nameInput | ICT17 |

    And Click on the element in the form content class
      | academicPeriod |
      | option1        |
      | gradeLevel     |
      | option1        |
      | documentType   |
      | option1        |
      | formAddButton  |
      | formSaveButton |

    Then Success message should be displayed

    Given Navigate to back page

    Then User delete the "ICT17"

    Then Success message should be displayed
