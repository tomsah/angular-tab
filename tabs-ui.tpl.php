



<div id="tabsUi-app" ng-controller="tabsUicontroller">

		<uib-tabset>
		<uib-tab ng-repeat="item in tabsUi" heading="{{item.node.title}}">
			{{item.node.Body}}
			<img src="{{item.node.Image.src}}" alt="">
		</uib-tab>
		</uib-tabset>

<!-- 	<div class="" ng-repeat="item in tabsUi">tt
		<h2>{{item.node.title}}</h2>

		<div class="body">
			{{item.node.Body}}
		</div>

		<img src="{{item.node.Image.src}}" alt="">
	</div> -->
</div>
