#Bir önceki Exam Giriş Senaryosunu
#  Aşağıdaki değerler için çalıştırınız.
#
#| ExamName    | AcademicPeriodOption | GradeLevelOption | documentTypeOption |
#| Math exam   | Option2              | Option4          | Option4            |
#| IT exam     | Option1              | Option1          | Option1            |
#| Oracle exam | Option2              | Option2          | Option2            |
#| Math exam   | Option1              | Option3          | Option3            |

Feature: Entrance Exam functionality Scenario Outline

  Background:
    Given Navigate to basqar
    When  Enter username and password and click Login button
    Then User should login successfully

    And Click on the element in the left class
      | entranceExamsParent |
      | setupEntranceExam   |
      | entranceExamsChild  |

    And Click on the element in the content class
      | addButton |

  Scenario Outline: Create Exam and delete

    When User sends the keys in the form content class
      | nameInput | <examName> |

    And Click on the element in the form content class
      | academicPeriod         |
      | <academicPeriodOption> |
      | gradeLevel             |
      | <gradeLevelOption>     |
      | documentType           |
      | <documentTypeOption>   |
      | formAddButton          |
      | formSaveButton         |

    Then Success message should be displayed

    Given Navigate to back page

    Then User delete the "<examName>"

    Then Success message should be displayed

    Examples:
      | examName    | academicPeriodOption | gradeLevelOption | documentTypeOption |
      | Math 1 exam | option2              | option4          | option4            |
      | ICT exam    | option1              | option1          | option1            |
      | Java exam   | option2              | option2          | option2            |
      | Math 2 exam | option1              | option3          | option3            |