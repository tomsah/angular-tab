




<div id="tabsUi-app" ng-controller="tabsUicontroller">
	<div class="" ng-repeat="item in tabsUi">
		<h2>{{item.node.title}}</h2>

		<div class="body">
			{{item.node.Body}}
		</div>

		<img src="{{item.node.Image.src}}" alt="">
	</div>
</div>
