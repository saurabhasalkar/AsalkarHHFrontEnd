<definitions xmlns="http://www.omg.org/spec/CMMN/20151109/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:cmmndi="http://www.omg.org/spec/CMMN/20151109/CMMNDI" xmlns:dc="http://www.omg.org/spec/CMMN/20151109/DC" xmlns:di="http://www.omg.org/spec/CMMN/20151109/DI" xmlns:flowable="http://flowable.org/cmmn" id="definition-id" targetNamespace="http://www.flowable.org/casedef">
<!--  1. Case Definition  -->
<case id="myCase" name="My Case">
<!--  2. Case Plan Model  -->
<casePlanModel id="casePlanModel" name="Case Plan Model" flowable:formKey="startForm">
<!--  3. Plan Items  -->
<planItem id="planItem1" definitionRef="task1"/>
<planItem id="planItem2" definitionRef="task2"/>
<planItem id="planItem3" definitionRef="stage1"/>
<planItem id="planItem4" definitionRef="milestone1"/>
<planItem id="planItem5" definitionRef="processTask1"/>
<planItem id="planItem6" definitionRef="caseTask1"/>
<planItem id="planItem7" definitionRef="decisionTask1"/>
<planItem id="planItem8" definitionRef="userEvent1"/>
<planItem id="planItem9" definitionRef="timerEvent1"/>
<!--  4. Human and Other Task Definitions  -->
<humanTask id="task1" name="Upload Document"/>
<humanTask id="task2" name="Review Document"/>
<processTask id="processTask1" name="Call BPMN Process"/>
<caseTask id="caseTask1" name="Call Another Case"/>
<decisionTask id="decisionTask1" name="Evaluate Decision Table"/>
<stage id="stage1" name="Review Stage"/>
<milestone id="milestone1" name="Case Finished"/>
<userEventListener id="userEvent1" name="Wait for User"/>
<timerEventListener id="timerEvent1" name="Wait Timer"/>
<!--  5. Criteria  -->
<entryCriterion id="entry1" sentryRef="sentry1"/>
<exitCriterion id="exit1" sentryRef="sentry2"/>
<!--  6. Sentries  -->
<sentry id="sentry1">
<ifPart>
<condition xsi:type="tExpression">${uploadComplete}</condition>
</ifPart>
</sentry>
<sentry id="sentry2">
<ifPart>
<condition xsi:type="tExpression">${reviewAccepted}</condition>
</ifPart>
</sentry>
</casePlanModel>
<!--  7. Optional: Roles  -->
<role id="userRole" name="User"/>
<role id="reviewerRole" name="Reviewer"/>
<!--  8. Optional: Case File Model  -->
<caseFileModel id="caseFileModel1">
<caseFileItem id="uploadedFile" name="File"/>
</caseFileModel>
</case>