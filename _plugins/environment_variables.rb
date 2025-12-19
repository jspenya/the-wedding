require 'dotenv'

# Load .env file if it exists
Dotenv.load

Jekyll::Hooks.register :site, :after_init do |site|
  # Debug logging
  puts "=" * 60
  puts "🔍 Loading Wedding Environment Variables"
  puts "=" * 60
  puts "COUPLE_NAMES: #{ENV['COUPLE_NAMES'] ? '✅ Present' : '❌ Missing'}"
  puts "CEREMONY_VENUE: #{ENV['CEREMONY_VENUE'] ? '✅ Present' : '❌ Missing'}"
  puts "SITE_TITLE: #{ENV['SITE_TITLE'] ? '✅ Present' : '❌ Missing (using default)'}"
  puts "SITE_DESCRIPTION: #{ENV['SITE_DESCRIPTION'] ? '✅ Present' : '❌ Missing (using default)'}"
  puts "OG_IMAGE: #{ENV['OG_IMAGE'] ? '✅ Present' : '❌ Missing (using default)'}"
  puts "=" * 60

  site.config['title'] = ENV['SITE_TITLE'] || site.config['title']
  site.config['description'] = ENV['SITE_DESCRIPTION'] || site.config['description']
  site.config['og_image'] = ENV['OG_IMAGE'] || '/assets/images/og-image.jpg'

  # Load dress code suggestions
  dress_code_ladies = []
  dress_code_gentlemen = []

  i = 1
  while ENV["DRESS_CODE_LADIES_#{i}"]
    dress_code_ladies << ENV["DRESS_CODE_LADIES_#{i}"]
    i += 1
  end

i = 1
  while ENV["DRESS_CODE_GENTLEMEN_#{i}"]
    dress_code_gentlemen << ENV["DRESS_CODE_GENTLEMEN_#{i}"]
    i += 1
  end

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
    'wedding_coordinator_phone' => ENV['WEDDING_COORDINATOR_PHONE'],
    'formspree_form_id' => ENV['FORMSPREE_FORM_ID'],
    'dress_code_ladies' => dress_code_ladies,
    'dress_code_gentlemen' => dress_code_gentlemen,
    'call_us_at' => ENV['CALL_US_AT']
  }

  puts "✅ Wedding config loaded successfully!"
end

