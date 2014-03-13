	globs = {};
	globs.entities = [];
	globs.supervisor = Supervisor.getInstance();
        globs.ta = $("#yaml-ta");
        $(function() {
                globs.vX = $(window).width();
                globs.vY = $(window).height();
                globs.stage = new Kinetic.Stage({
                        container: 'container',
                        width: globs.vX-(globs.vX/8),
                        height: 500
                })

                globs.layer = new Kinetic.Layer()
                /*globs.rect = new Kinetic.Rect({
                        x: globs.stage.width()/4,
                        y: globs.stage.height()/4,
                        width: globs.vX/8,
                        height:globs.vY/4,
                        fill: 'black',
                        stroke: 'red',
                        strokeWidth: 8
                })
                globs.layer.add(globs.rect)
                globs.stage.add(globs.layer)
                */
                $("form#yaml").submit(function(e) {
                        e.preventDefault()
                        e.stopPropagation()
                        globs.yaml = jsyaml.load(globs.ta.val());
                        globs.ta.val('');
                        console.info(globs.yaml)
			for(var entity in globs.yaml) {
				name = entity;
				data = globs.yaml[entity];
				eObj = new Entity(name,data);
				globs.supervisor.addEntity(name,eObj)
			}
			globs.supervisor.linkEntities()
                        return false;
                })
        })

