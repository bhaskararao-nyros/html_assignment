<!DOCTYPE html>
<html>
<body>
<table class="table">
  <thead>
    <tr>
      <th><input type="checkbox" ng-click="selectAll()"></th>
      <th>Title</th>
    </tr>
  </thead>
  <tbody>
    <tr ng-repeat="e in entities">
      <td><input type="checkbox" name="selected" ng-click="updateSelection($event, e.id)"></td>
      <td>{{e.title}}</td>
    </tr>
  </tbody>
</table>

</body>
</html>
