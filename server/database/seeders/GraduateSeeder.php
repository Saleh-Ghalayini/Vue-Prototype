<?php

namespace Database\Seeders;

use App\Models\Graduate;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GraduateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear the graduates table before seeding
        DB::table('graduates')->truncate();

        // Sample graduate data based on frontend mock data
        $graduates = [
            [
                'name' => 'Sarah Johnson',
                'email' => 'sarah.johnson@example.com',
                'skills' => ['Vue.js', 'React', 'TypeScript'],
                'photo' => 'https://randomuser.me/api/portraits/women/44.jpg',
                'linkedIn' => 'https://linkedin.com/in/example1',
                'github' => 'https://github.com/example1',
                'cv' => '/assets/cv/sarah-johnson-cv.pdf',
                'videoCV' => 'https://youtube.com/watch?v=example1'
            ],
            [
                'name' => 'David Chen',
                'email' => 'david.chen@example.com',
                'skills' => ['Node.js', 'Express', 'MongoDB'],
                'photo' => 'https://randomuser.me/api/portraits/men/32.jpg',
                'linkedIn' => 'https://linkedin.com/in/example2',
                'github' => 'https://github.com/example2',
                'cv' => '/assets/cv/david-chen-cv.pdf',
                'videoCV' => 'https://youtube.com/watch?v=example2'
            ],
            [
                'name' => 'Maya Patel',
                'email' => 'maya.patel@example.com',
                'skills' => ['Figma', 'Adobe XD', 'Vue.js'],
                'photo' => 'https://randomuser.me/api/portraits/women/67.jpg',
                'linkedIn' => 'https://linkedin.com/in/example3',
                'github' => 'https://github.com/example3',
                'cv' => '/assets/cv/maya-patel-cv.pdf',
                'videoCV' => 'https://youtube.com/watch?v=example3'
            ],
            [
                'name' => 'James Wilson',
                'email' => 'james.wilson@example.com',
                'skills' => ['Java', 'Spring Boot', 'PostgreSQL'],
                'photo' => 'https://randomuser.me/api/portraits/men/52.jpg',
                'linkedIn' => 'https://linkedin.com/in/example4',
                'github' => 'https://github.com/example4',
                'cv' => '/assets/cv/james-wilson-cv.pdf',
                'videoCV' => 'https://youtube.com/watch?v=example4'
            ],
            [
                'name' => 'Amina Yusuf',
                'email' => 'amina.yusuf@example.com',
                'skills' => ['Python', 'Django', 'REST API', 'Docker'],
                'photo' => 'https://randomuser.me/api/portraits/women/12.jpg',
                'linkedIn' => 'https://linkedin.com/in/amina-yusuf',
                'github' => 'https://github.com/aminayusuf',
                'cv' => '/assets/cv/amina-yusuf-cv.pdf',
                'videoCV' => 'https://youtube.com/watch?v=amina1'
            ],
            [
                'name' => 'Lucas Schmidt',
                'email' => 'lucas.schmidt@example.com',
                'skills' => ['Go', 'Kubernetes', 'Microservices', 'gRPC'],
                'photo' => 'https://randomuser.me/api/portraits/men/23.jpg',
                'linkedIn' => 'https://linkedin.com/in/lucas-schmidt',
                'github' => 'https://github.com/lucasschmidt',
                'cv' => '/assets/cv/lucas-schmidt-cv.pdf',
                'videoCV' => 'https://youtube.com/watch?v=lucas1'
            ],
            [
                'name' => 'Priya Nair',
                'email' => 'priya.nair@example.com',
                'skills' => ['Angular', 'RxJS', 'NgRx', 'Sass'],
                'photo' => 'https://randomuser.me/api/portraits/women/34.jpg',
                'linkedIn' => 'https://linkedin.com/in/priya-nair',
                'github' => 'https://github.com/priyanair',
                'cv' => '/assets/cv/priya-nair-cv.pdf',
                'videoCV' => 'https://youtube.com/watch?v=priya1'
            ],
            [
                'name' => 'Mohamed Salah',
                'email' => 'mohamed.salah@example.com',
                'skills' => ['PHP', 'Laravel', 'MySQL', 'Redis'],
                'photo' => 'https://randomuser.me/api/portraits/men/45.jpg',
                'linkedIn' => 'https://linkedin.com/in/mohamed-salah',
                'github' => 'https://github.com/mohamedsalah',
                'cv' => '/assets/cv/mohamed-salah-cv.pdf',
                'videoCV' => 'https://youtube.com/watch?v=mohamed1'
            ],
            [
                'name' => 'Elena Petrova',
                'email' => 'elena.petrova@example.com',
                'skills' => ['C#', '.NET Core', 'Azure', 'Blazor'],
                'photo' => 'https://randomuser.me/api/portraits/women/56.jpg',
                'linkedIn' => 'https://linkedin.com/in/elena-petrova',
                'github' => 'https://github.com/elenapetrova',
                'cv' => '/assets/cv/elena-petrova-cv.pdf',
                'videoCV' => 'https://youtube.com/watch?v=elena1'
            ],
            [
                'name' => 'Carlos Mendez',
                'email' => 'carlos.mendez@example.com',
                'skills' => ['Ruby', 'Rails', 'PostgreSQL', 'Sidekiq'],
                'photo' => 'https://randomuser.me/api/portraits/men/67.jpg',
                'linkedIn' => 'https://linkedin.com/in/carlos-mendez',
                'github' => 'https://github.com/carlosmendez',
                'cv' => '/assets/cv/carlos-mendez-cv.pdf',
                'videoCV' => 'https://youtube.com/watch?v=carlos1'
            ],
            [
                'name' => 'Sofia Rossi',
                'email' => 'sofia.rossi@example.com',
                'skills' => ['Swift', 'iOS', 'CoreData', 'SwiftUI'],
                'photo' => 'https://randomuser.me/api/portraits/women/78.jpg',
                'linkedIn' => 'https://linkedin.com/in/sofia-rossi',
                'github' => 'https://github.com/sofiarossi',
                'cv' => '/assets/cv/sofia-rossi-cv.pdf',
                'videoCV' => 'https://youtube.com/watch?v=sofia1'
            ],
            [
                'name' => 'Ivan Ivanov',
                'email' => 'ivan.ivanov@example.com',
                'skills' => ['C++', 'Qt', 'OpenGL', 'Linux'],
                'photo' => 'https://randomuser.me/api/portraits/men/89.jpg',
                'linkedIn' => 'https://linkedin.com/in/ivan-ivanov',
                'github' => 'https://github.com/ivanivanov',
                'cv' => '/assets/cv/ivan-ivanov-cv.pdf',
                'videoCV' => 'https://youtube.com/watch?v=ivan1'
            ],
            [
                'name' => 'Fatima Zahra',
                'email' => 'fatima.zahra@example.com',
                'skills' => ['JavaScript', 'Next.js', 'GraphQL', 'Jest'],
                'photo' => 'https://randomuser.me/api/portraits/women/90.jpg',
                'linkedIn' => 'https://linkedin.com/in/fatima-zahra',
                'github' => 'https://github.com/fatimazahra',
                'cv' => '/assets/cv/fatima-zahra-cv.pdf',
                'videoCV' => 'https://youtube.com/watch?v=fatima1'
            ],
            [
                'name' => 'Tom Lee',
                'email' => 'tom.lee@example.com',
                'skills' => ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
                'photo' => 'https://randomuser.me/api/portraits/men/91.jpg',
                'linkedIn' => 'https://linkedin.com/in/tom-lee',
                'github' => 'https://github.com/tomlee',
                'cv' => '/assets/cv/tom-lee-cv.pdf',
                'videoCV' => 'https://youtube.com/watch?v=tom1'
            ]
        ];

        foreach ($graduates as $graduate) {
            Graduate::create($graduate);
        }
    }
}
