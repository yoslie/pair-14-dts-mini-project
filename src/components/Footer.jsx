const navigation = {
  solutions: [
    { name: 'Audio and Subtitles', href: '#' },
    { name: 'Media Center', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Contact Us', href: '#' }
  ],
  legal: [
    { name: 'Audio Description', href: '#' },
    { name: 'Investor Relations', href: '#' },
    { name: 'Legal Provision', href: '#' }
  ],
  company: [
    { name: 'Help Center', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Cookie Preferences', href: '#' }
  ],
  support: [
    { name: 'Gift Cards', href: '#' },
    { name: 'Term of Use', href: '#' },
    { name: 'Corporate Information', href: '#' }
  ]
}

const Footer = () => {
return (
<footer className="bg-semiBlack-200" aria-labelledby="footer-heading">
  <div className="max-w-6xl mx-auto pt-16 pb-8 px-8">
    <div className="grid grid-cols-2 lg:grid-cols-4">
      <div>
        <ul className="space-y-2 lg:space-y-4">
          {navigation.solutions.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-base text-gray-600 hover:text-white">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="space-y-2 lg:space-y-4">
          {navigation.legal.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-base text-gray-600 hover:text-white">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 lg:mt-0">
        <ul className="space-y-2 lg:space-y-4">
          {navigation.company.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-base text-gray-600 hover:text-white">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 lg:mt-0">
        <ul className="space-y-2 lg:space-y-4">
          {navigation.support.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-base text-gray-600 hover:text-white">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="w-32 mt-6 py-2 px-4 text-gray-600 border border-gray-600 text-sm">
      Service Code
    </div>
    <div className="mt-6 border-t border-gray-700">
      <p className="pt-4 text-base text-gray-600 md:mt-0 md:order-1">
        &copy; 2022 Movies, All rights reserved.
      </p>
    </div>
  </div>
</footer>
)
}

export default Footer;