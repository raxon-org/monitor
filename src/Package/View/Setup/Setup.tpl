{{$register = Package.Raxon.Monitor:Init:register()}}
{{if(!is.empty($register))}}
{{Package.Raxon.Monitor:Import:role.system()}}
{{$flags = flags()}}
{{$options = options()}}
{{Package.Raxon.Monitor:Main:install($flags, $options)}}
{{/if}}