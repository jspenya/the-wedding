require 'dotenv'

Jekyll::Hooks.register :site, :after_init do |site|
  Dotenv.load

  site.config['wedding'] = {
    'couple_names' => ENV['COUPLE_NAMES'],
    'groom_name' => ENV['GROOM_NAME'],
    'bride_name' => ENV['BRIDE_NAME'],
    'date' => ENV['WEDDING_DATE'],
    'date_formatted' => ENV['DATE_FORMATTED'],
    'ceremony_time' => ENV['CEREMONY_TIME'],
    'ceremony_venue' => ENV['CEREMONY_VENUE'],
    'ceremony_address' => ENV['CEREMONY_ADDRESS'],
    'ceremony_lat' => ENV['CEREMONY_LAT'],
    'ceremony_lng' => ENV['CEREMONY_LNG'],
    'reception_venue' => ENV['RECEPTION_VENUE'],
    'reception_address' => ENV['RECEPTION_ADDRESS'],
    'reception_time' => ENV['RECEPTION_TIME'],
    'respond_to_rsvp_by' => ENV['RESPOND_TO_RSVP_BY'],
    'ceremony_gmaps_url' => ENV['CEREMONY_GMAPS_URL'],
    'contact_us_email' => ENV['CONTACT_US_EMAIL'],
    'wedding_coordinator_name' => ENV['WEDDING_COORDINATOR_NAME'],
    'wedding_coordinator_email' => ENV['WEDDING_COORDINATOR_EMAIL'],
    'wedding_coordinator_phone' => ENV['WEDDING_COORDINATOR_PHONE']
  }
end

