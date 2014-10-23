require 'sinatra'
require 'net/http'

set :public_dir, Proc.new { File.join(root, "public")}


get '/' do
erb :thermocat
end


get '/weather' do
	uri = URI ("http://api.openweathermap.org/data/2.5/find?q=London&units=metric")
	Net::HTTP.get(uri)
  
end