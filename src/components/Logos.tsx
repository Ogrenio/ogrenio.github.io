const Logos = () => {
    return (
      <section id="tech-advantages" className="py-24 px-5 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Teknolojik Avantajlarımız</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern altyapımız ve uzman ekibimizle sunduğumuz üstün özellikler
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* Güvenlik */}
    <TechCard 
        icon={<ShieldLockIcon className="h-10 w-10" />}
        title="Veri Güvenliği"
        description={
            <ul className="space-y-2 mt-3 text-left">
                <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Veri şifreleme ve güvenlik duvarları ile korunma</span>
                </li>
                <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Firebase Authentication ile güvenli kullanıcı girişi</span>
                </li>
                <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Google Cloud güvencesiyle yüksek güvenlik seviyeleri</span>
                </li>
            </ul>
        }
    />

    {/* Veri Aktarımı */}
    <TechCard 
        icon={<DataFlowIcon className="h-10 w-10" />}
        title="Gerçek Zamanlı Veri Senkronizasyonu"
        description={
            <ul className="space-y-2 mt-3 text-left">
                <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Realtime Database ile anlık veri aktarımı</span>
                </li>
                <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Cloud Firestore ile hızlı ve güvenli veri depolama</span>
                </li>
                <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Veri senkronizasyonu için güçlü SDK desteği</span>
                </li>
            </ul>
        }
    />

    {/* Yapay Zeka */}
    <TechCard 
    icon={<AIIcon className="h-10 w-10" />}
    title="Yapay Zeka"
    description={
        <ul className="space-y-2 mt-3 text-left">
            <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Veri analizi ve işlemeye dayalı akıllı karar verme süreçleri</span>
            </li>
            <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Özelleştirilebilir algoritmalar ile sürekli öğrenme</span>
            </li>
            <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Veri setlerine dayalı tahminler ve geleceğe yönelik öngörüler</span>
            </li>
        </ul>
    }
/>

</div>

        </div>
      </section>
    )
  }
  
  const TechCard = ({ icon, title, description }: { 
    icon: React.ReactNode
    title: string
    description: React.ReactNode 
  }) => (
    <div className="bg-muted/30 p-8 rounded-xl border border-muted hover:border-primary/20 transition-all h-full">
      <div className="flex justify-center mb-6 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <div className="text-muted-foreground">
        {description}
      </div>
    </div>
  )
  
  // SVG İkon Tanımları
  const ShieldLockIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
  
  const DataFlowIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
    </svg>
  )
  
  const AIIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  )
  
  const CheckIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
  
  export default Logos