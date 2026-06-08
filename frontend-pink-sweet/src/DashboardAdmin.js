import React from 'react';
// Usamos Lucide React para renderizar exactamente la estructura de iconos solicitada
import { 
  LayoutDashboard, ShoppingBag, Box, TrendingUp, Users, CalendarDays, 
  Percent, FileText, Settings, Search, Filter, Mail, MoreVertical, 
  UserPlus, Bell, User, CheckCircle2, XCircle, ChevronDown, HelpCircle, 
  MessageSquare, DollarSign, Award, Star, ShieldAlert
} from 'lucide-react';

// Datos exactos basados en la imagen original
const staffMembers = [
  { id: 1, name: 'Martín Hernández', role: 'Administradora', email: 'martin@sweetcreamrose.com', status: 'Activo', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop' },
  { id: 2, name: 'Lucía Suárez', role: 'Repostera', email: 'lucia@sweetcreamrose.com', status: 'Inactivo', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop' },
  { id: 3, name: 'Valeria Domínguez', role: 'Vendedora', email: 'valeria@sweetcreamrose.com', status: 'Activo', photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop' },
  { id: 4, name: 'Carlos Ramíres', role: 'At. al cliente', email: 'carlos@sweetcreamrose.com', status: 'Activo', photo: 'https://images.unsplash.com/photo-1397214564899-7d56e8790476?q=80&w=150&auto=format&fit=crop' },
  { id: 5, name: 'Diana Salazar', role: 'At. al cliente', email: 'diana@sweetcreamrose.com', status: 'Activo', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop' },
  { id: 6, name: 'Andrea Torrez', role: 'Repostera', email: 'andrea@sweetcreamrose.com', status: 'Activo', photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=150&auto=format&fit=crop' },
  { id: 7, name: 'Javier Ruíz', role: 'Administrador', email: 'javier@sweetcreamrose.com', status: 'Inactivo', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop' },
];

// Componente para los items del menú lateral izquierdo
const SidebarItem = ({ icon, text, active }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 16px',
    borderRadius: '12px',
    cursor: 'pointer',
    backgroundColor: active ? '#f3e8ee' : 'transparent',
    color: active ? '#a1586a' : '#ffffff',
    fontWeight: active ? '600' : '400',
    fontSize: '14px',
    opacity: active ? 1 : 0.85,
  }}>
    {icon}
    <span>{text}</span>
  </div>
);

// Componente para las 4 tarjetas de resumen de arriba (Mantiene los bordes de color individuales)
const TopStatCard = ({ icon, value, label, linkText, borderColor, iconColor, bgIcon }) => (
  <div style={{
    flex: 1,
    backgroundColor: '#ffffff',
    border: `1px solid ${borderColor}`,
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ backgroundColor: bgIcon, padding: '10px', borderRadius: '50%', color: iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </div>
      <div>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, color: '#1e293b' }}>{value}</h3>
        <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>{label}</p>
      </div>
    </div>
    <a href="#" style={{ fontSize: '12px', color: iconColor, textDecoration: 'underline', fontWeight: '500' }}>{linkText}</a>
  </div>
);

// Componente para las tarjetas de distribución por cargo inferiores
const RoleDistributionCard = ({ icon, title, count, borderColor, iconColor }) => (
  <div style={{
    flex: 1,
    backgroundColor: '#ffffff',
    border: `1px solid ${borderColor}`,
    borderRadius: '12px',
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>
    <div style={{ color: iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {icon}
    </div>
    <div>
      <h4 style={{ fontSize: '13px', fontWeight: 'bold', color: '#1e293b', margin: '0 0 2px 0' }}>{title}</h4>
      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>
        {count} <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 'normal' }}>Personas</span>
      </p>
    </div>
  </div>
);

export default function DashboardAdmin() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fffcfc', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* ================= BARRA LATERAL IZQUIERDA ================= */}
      <div style={{ width: '260px', backgroundColor: '#bc6c7d', color: '#ffffff', padding: '24px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          {/* Logo Principal */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px', textAlign: 'center' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
              <span style={{ color: '#bc6c7d', fontSize: '18px', fontWeight: 'bold', width: '200%', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="imagenes/Logo de boletas.jpeg" alt="Logo de boletas" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></span>
            </div>
            <h2 style={{ fontSize: '18px', margin: 0, fontWeight: '600', fontFamily: 'Georgia, serif' }}>Sweet Cream Rose</h2>
            <span style={{ fontSize: '11px', opacity: 0.7 }}>Repostería artesanal</span>
          </div>

          {/* Listado del menú */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <SidebarItem icon={<LayoutDashboard size={18} />} text="Dashboard" />
            <SidebarItem icon={<ShoppingBag size={18} />} text="Pedidos" />
            <SidebarItem icon={<Box size={18} />} text="Productos" />
            <SidebarItem icon={<TrendingUp size={18} />} text="Ventas" />
            <SidebarItem icon={<Users size={18} />} text="Personal" active />
            <SidebarItem icon={<CalendarDays size={18} />} text="Horarios" />
            <SidebarItem icon={<Percent size={18} />} text="Ofertas" />
            <SidebarItem icon={<DollarSign size={18} />} text="Ganancias" />
            <SidebarItem icon={<FileText size={18} />} text="Reportes" />
            <SidebarItem icon={<MessageSquare size={18} />} text="Comentarios" />
            <SidebarItem icon={<Settings size={18} />} text="Configuración" />
          </div>
        </div>

        {/* Sección del Cupcake Promocional en el Sidebar */}
        <div style={{ textAlign: 'center', margin: '20px 0', padding: '0 10px' }}>
          <img 
            src="imagenes/Logo de perfil.png" 
            alt="Cupcake decorativo" 
            style={{ width: '90px', height: '90px', objectFit: 'contain', marginBottom: '8px' }}
          />
          <p style={{ fontSize: '13px', margin: 0, fontStyle: 'italic', opacity: 0.9 }}>Dulces momentos, hechos con amor ❤️</p>
        </div>

        {/* Footer del Perfil del Administrador (Abajo a la izquierda) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', backgroundColor: '#ffffff', borderRadius: '50%', color: '#bc6c7d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>A</div>
            <div>
              <p style={{ margin: 0, fontSize: '13px', fontWeight: '600' }}>Administrador</p>
              <p style={{ margin: 0, fontSize: '11px', opacity: 0.7 }}>admin@sweetcreamrose.com</p>
            </div>
          </div>
          <ChevronDown size={16} style={{ opacity: 0.7, cursor: 'pointer' }} />
        </div>
      </div>

      {/* ================= CONTENIDO PRINCIPAL CENTRAL ================= */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Navbar Superior */}
        <div style={{ height: '60px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 32px', gap: '20px', backgroundColor: '#ffffff' }}>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <Bell size={20} color="#64748b" />
            <span style={{ position: 'absolute', top: '-4px', right: '-4px', backgroundColor: '#e05368', color: '#ffffff', fontSize: '9px', borderRadius: '50%', width: '14px', height: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
          </div>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <User size={18} color="#64748b" />
          </div>
        </div>

        {/* Cuerpo del Dashboard */}
        <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '32px', overflowY: 'auto', maxHeigth: 'calc(100vh - 60px)' }}>
          
          {/* Fila del Título y Botón de Agregar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', margin: '0 0 4px 0' }}>PERSONAL</h1>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Gestiona tu equipo de trabajo.</p>
            </div>
            <button style={{ backgroundColor: '#fdf2f4', border: '1px solid #f9dadf', color: '#bc6c7d', padding: '10px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <UserPlus size={16} /> AGREGAR PERSONAL
            </button>
          </div>

          {/* Las 4 Tarjetas Estadísticas Superiores */}
          <div style={{ display: 'flex', gap: '20px' }}>
            <TopStatCard icon={<Users size={20} />} value="12" label="Total de personal" linkText="Ver todos" borderColor="#f9dadf" iconColor="#bc6c7d" bgIcon="#fdf2f4" />
            <TopStatCard icon={<CheckCircle2 size={20} />} value="10" label="Activos" linkText="Ver activos" borderColor="#fef08a" iconColor="#ca8a04" bgIcon="#fef9c3" />
            <TopStatCard icon={<XCircle size={20} />} value="2" label="Inactivos" linkText="Ver inactivos" borderColor="#bbf7d0" iconColor="#16a34a" bgIcon="#dcfce7" />
            <TopStatCard icon={<User size={20} />} value="1" label="Nuevos este mes" linkText="Ver nuevos" borderColor="#e9d5ff" iconColor="#9333ea" bgIcon="#f3e8ff" />
          </div>

          {/* Distribución de Bloques: Lista de Miembros (Izquierda) + Información Importante (Derecha) */}
          <div style={{ display: 'flex', gap: '24px' }}>
            
            {/* Contenedor de Miembros de Equipo */}
            <div style={{ flex: 2, backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #f1f5f9', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>Miembros de equipo</h3>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {/* Buscador */}
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '6px 12px', width: '260px', backgroundColor: '#fff' }}>
                    <Search size={16} color="#94a3b8" style={{ marginRight: '8px' }} />
                    <input type="text" placeholder="Buscar por nombre, cargo o correo..." style={{ border: 'none', width: '100%', fontSize: '13px', outline: 'none' }} />
                  </div>
                  {/* Botón Filtro */}
                  <button style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '6px 12px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', cursor: 'pointer' }}>
                    <Filter size={14} /> Filtros
                  </button>
                </div>
              </div>

              {/* Lista Vertical de Filas de los Empleados */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {staffMembers.map((member) => (
                  <div key={member.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', border: '1px solid #f1f5f9', borderRadius: '12px', backgroundColor: '#ffffff' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <img src={member.photo} alt={member.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                      <div>
                        <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', margin: '0 0 2px 0' }}>{member.name}</h4>
                        <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 2px 0' }}>{member.role}</p>
                        <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Mail size={12} /> {member.email}
                        </p>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ 
                        fontSize: '12px', 
                        fontWeight: '500', 
                        padding: '4px 10px', 
                        borderRadius: '20px', 
                        backgroundColor: member.status === 'Activo' ? '#dcfce7' : '#f1f5f9', 
                        color: member.status === 'Activo' ? '#15803d' : '#64748b',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: member.status === 'Activo' ? '#16a34a' : '#94a3b8' }} />
                        {member.status}
                      </span>
                      <MoreVertical size={18} color="#94a3b8" style={{ cursor: 'pointer' }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Paginación */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', fontSize: '13px', color: '#64748b' }}>
                <span>Mostrando de 1-7 de 12 personas</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button style={{ border: '1px solid #e2e8f0', backgroundColor: '#ffffff', borderRadius: '6px', width: '32px', height: '32px', cursor: 'pointer' }}>&lt;</button>
                  <button style={{ border: 'none', backgroundColor: '#bc6c7d', color: '#ffffff', borderRadius: '6px', width: '32px', height: '32px', fontWeight: 'bold' }}>1</button>
                  <button style={{ border: '1px solid #e2e8f0', backgroundColor: '#ffffff', borderRadius: '6px', width: '32px', height: '32px', cursor: 'pointer' }}>2</button>
                  <button style={{ border: '1px solid #e2e8f0', backgroundColor: '#ffffff', borderRadius: '6px', width: '32px', height: '32px', cursor: 'pointer' }}>&gt;</button>
                </div>
              </div>
            </div>

            {/* Contenedor Lateral Derecho (Información Importante) */}
            <div style={{ flex: 1, backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #f1f5f9', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>Información importante</h3>
              
              <div style={{ display: 'flex', gap: '12px' }}>
                <HelpCircle size={18} color="#bc6c7d" style={{ shrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#1e293b' }}>Misión y políticas</h4>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: '1.4' }}>Haz click para conocer más sobre nuestra misión, visión y de la empresa.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <Award size={18} color="#bc6c7d" style={{ shrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#1e293b' }}>Productividad</h4>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: '1.4' }}>Revisa el desempeño de tu equipo periódicamente.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <Star size={18} color="#bc6c7d" style={{ shrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#1e293b' }}>Seguridad</h4>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: '1.4' }}>Los lineamientos de bioseguridad en cocina son obligatorios.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                <ShieldAlert size={18} color="#bc6c7d" style={{ shrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#1e293b' }}>Nuevos registros</h4>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 6px 0', lineHeight: '1.4' }}>Revisa y confirma la incorporación de nuevos miembros del equipo.</p>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#bc6c7d', backgroundColor: '#fdf2f4', padding: '2px 8px', borderRadius: '4px' }}>1 nuevo pendiente</span>
                </div>
              </div>
            </div>

          </div>

          {/* Distribución por Cargo (Sección Inferior) */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e293b', marginBottom: '16px' }}>Distribución por cargo</h3>
            <div style={{ display: 'flex', gap: '16px' }}>
              <RoleDistributionCard icon={<ShoppingBag size={20} />} title="Repostería" count="4" borderColor="#f9dadf" iconColor="#bc6c7d" />
              <RoleDistributionCard icon={<Box size={20} />} title="Vendedora" count="2" borderColor="#fef08a" iconColor="#ca8a04" />
              <RoleDistributionCard icon={<FileText size={20} />} title="At. al cliente" count="2" borderColor="#bbf7d0" iconColor="#16a34a" />
              <RoleDistributionCard icon={<Settings size={20} />} title="Administración" count="2" borderColor="#e9d5ff" iconColor="#9333ea" />
            </div>
          </div>

          {/* Footer Informativo */}
          <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>💖 Gracias por endulzar cada día con tu trabajo</p>
          </div>

        </div>
      </div>

    </div>
  );
}