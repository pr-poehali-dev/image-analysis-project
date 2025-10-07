import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const projects = [
    {
      title: 'Жилой комплекс "Минимал"',
      category: 'Жилая архитектура',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
    },
    {
      title: 'Офисное пространство',
      category: 'Коммерческая недвижимость',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
      title: 'Городской парк',
      category: 'Урбанистика',
      image: 'https://images.unsplash.com/photo-1519744346361-7a029b427a59?w=800&q=80'
    },
    {
      title: 'Частная вилла',
      category: 'Индивидуальное строительство',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80'
    },
    {
      title: 'Культурный центр',
      category: 'Общественные пространства',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80'
    },
    {
      title: 'Бизнес-центр',
      category: 'Коммерческая недвижимость',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80'
    }
  ];

  const services = [
    {
      icon: 'Building2',
      title: 'Архитектурное проектирование',
      description: 'Разработка концепции и полного проекта здания с учетом всех требований и норм'
    },
    {
      icon: 'Home',
      title: 'Дизайн интерьеров',
      description: 'Создание функциональных и эстетичных пространств для жизни и работы'
    },
    {
      icon: 'MapPin',
      title: 'Урбанистика',
      description: 'Планирование городских пространств и общественных территорий'
    },
    {
      icon: 'FileText',
      title: 'Консалтинг',
      description: 'Экспертная оценка проектов и консультации по архитектурным решениям'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/73e215e6-af4c-4875-aa76-f46a54ccfff8.jpg"
                alt="NDA Logo"
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-medium hover:text-accent transition-colors">Главная</a>
              <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">О нас</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-accent transition-colors">Портфолио</a>
              <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Услуги</a>
              <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight">
              NDA
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Neuro.Design.Architecture
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Создаем современные архитектурные решения, которые меняют городское пространство и улучшают качество жизни
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">О студии</h2>
              <p className="text-lg text-muted-foreground mb-4">
                NDA — архитектурная студия, специализирующаяся на создании современных пространств с использованием инновационных подходов и нейродизайна.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Мы верим, что архитектура должна быть не только функциональной, но и вдохновляющей, создавая среду для развития и комфортной жизни.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Наград</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/files/1c838278-c489-4f31-933a-49f97b99ead0.png"
                alt="Urban Acupunctures"
                className="w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="analysis" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">Урбанистический анализ</h2>
          <div className="max-w-5xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/files/f83af4c6-2fe8-4ed0-b10f-415bda3da1e5.png"
              alt="Gradual Shift Analysis"
              className="w-full h-auto shadow-2xl"
            />
            <p className="text-center text-muted-foreground mt-8 text-lg">
              Комплексный анализ городских пространств и социально-экономических изменений в структуре города
            </p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-12">Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group cursor-pointer overflow-hidden"
              >
                <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-12">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="mb-4">
                  <Icon name={service.icon} size={48} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl font-bold mb-12 text-center">Связаться с нами</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Ваше имя
              </label>
              <Input 
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input 
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Сообщение
              </label>
              <Textarea 
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full min-h-32"
                required
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Отправить сообщение
            </Button>
          </form>
        </div>
      </section>

      <footer className="py-12 px-6 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/73e215e6-af4c-4875-aa76-f46a54ccfff8.jpg"
                alt="NDA Logo"
                className="h-10 w-auto"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 NDA. Все права защищены.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
