1. 개발(테스트)
	eclipse Ctrl+F11 (스프링부트 애플리케이션 실행)

2. 빌드 & 배포
	1) build maven goal
	
			mvn -f kanbanboard/backend clean package
	
	2) 배포 후 실행
			
			- java -D spring.profiles.active=production -jar kanbanboard/backend/kanbanboard.jar