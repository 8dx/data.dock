/* class spec */

LinkTypes = {
	Comprises:  1,
	Produces:   2,
	Requires:   3,
	InstanceOf: 4
} 

function Supervisor() {
	this.entities = {}
	this.getEntity = function(name) {
		if(this.entities[name]) {
			return this.entities[name];
		} else {
			return false;
		}
	}
	this.addEntity = function(name,entity) {
		console.log("adding entity " + name)
		console.info(entity)
		this.entities[name] = entity;
	}
	this.linkEntities = function() {
		for(var entity in this.entities) {
			this.entities[entity].generateLinks()
		}
	}
	
}
Supervisor.getInstance = function() {
	console.log("in getInstance")
	if(Supervisor.instance == undefined) {
		console.log("creating initial instance of Supervisor")
		 Supervisor.instance = new Supervisor()
	} else {
		console.log("returning old instance of Supervisor");
	}
	return Supervisor.instance
}


linkbuilder = (function(type) {
	window[type+"Link"] = function(target) {
		this.target = target;
		this.lineStyle = "foobar";
		this.line = new Kinetic.Line({});
	}
})

for(var type in LinkTypes) {
	linkbuilder(type)
}

ComprisesLink.prototype.lineStyle =  { color: "black" };
ProducesLink.prototype.lineStyle =   { color: "blue"  };
RequiresLink.prototype.lineStyle =   { color: "red"   };
InstanceOfLink.prototype.lineStyle = { color: "green" };


	
function Entity(name,data) {
	console.log("creating new entity " + name);
	console.info(data);
	this.supervisor = Supervisor.getInstance()
	this.title = name
	this.l = {};
	this.links = [];
	this.description = data.Description	
	this.textElement = new Kinetic.Text({})
	for(var link in LinkTypes) {
		if(data[link]) {
			this.l[link] = data[link]
		}
	}
	this.generateLinks = function() {
			links = [];
			console.log("this.l = " );
			console.info(this.l);
			for(var m in this.l) {
				lnk = this.l[m]
				if(!Array.isArray(lnk)) { links = [lnk]; }
				else { links = lnk; } 
					for(var i in links) {
					item = links[i]
					console.log(m+" link type found in data, adding to link list")
					var entity = this.supervisor.getEntity(item)
					if(entity) {
						this.links.push(new window[m+"Link"](entity))
						console.log("pushed new link to entity " + name + ": " + item)
					} else {
						console.log("entity could not be found: " + item)
					}
				}
			}
		}
}
